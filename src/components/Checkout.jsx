import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useCart } from '../context/CartContext'

// Load Stripe with publishable key from env
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '')

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      fontFamily: 'Inter, sans-serif',
      color: '#5A3E28',
      '::placeholder': { color: '#9C8570' },
    },
    invalid: { color: '#C45A5A' },
  },
}

function CheckoutForm() {
  const { items, total, clearCart } = useCart()
  const navigate = useNavigate()
  const stripe = useStripe()
  const elements = useElements()

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  })
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState('')
  const [succeeded, setSucceeded] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!form.name || !form.email) {
      setError('Please fill in your name and email.')
      return
    }
    if (items.length === 0) {
      setError('Your cart is empty.')
      return
    }
    if (!stripe || !elements) {
      setError('Stripe is still loading. Please try again.')
      return
    }

    setProcessing(true)

    try {
      // 1. Create PaymentIntent on the server
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: total }),
      })

      if (!response.ok) {
        const errData = await response.json()
        throw new Error(errData.error || 'Failed to create payment')
      }

      const { clientSecret } = await response.json()

      // 2. Confirm the card payment
      const cardElement = elements.getElement(CardElement)
      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: form.name,
            email: form.email,
          },
        },
      })

      if (confirmError) {
        throw new Error(confirmError.message)
      }

      if (paymentIntent.status === 'succeeded') {
        setSucceeded(true)

        // Generate order ID from Stripe's payment intent
        const orderId = 'PP-' + paymentIntent.id.replace('pi_', '').toUpperCase()

        // Store order info
        const orderData = {
          id: orderId,
          email: form.email,
          name: form.name,
          items: [...items],
          total,
          date: new Date().toISOString(),
        }

        localStorage.setItem(`order-${orderId}`, JSON.stringify(orderData))
        clearCart()
        navigate(`/download/${orderId}`)
      }
    } catch (err) {
      setError(err.message || 'Payment failed. Please try again.')
      setProcessing(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="checkout-page">
        <div className="container" style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
          <h2>Your cart is empty</h2>
          <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--space-sm)' }}>
            Add some items before checking out.
          </p>
        </div>
      </div>
    )
  }

  const categoryEmoji = {
    cards: '✉️',
    journals: '📓',
    planners: '📅',
    stickers: '✨',
    bundles: '🎁',
  }

  return (
    <div className="checkout-page fade-in">
      <div className="container">
        <div className="page-header" style={{ paddingBottom: 'var(--space-xl)' }}>
          <h1>Checkout</h1>
        </div>

        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h2>Your Information</h2>

            {error && <div className="message message-error">{error}</div>}
            {succeeded && <div className="message message-success">Payment successful!</div>}

            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Alex Morgan"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="alex@example.com"
                required
              />
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                Your download link will be sent here
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="address">Street Address</label>
              <input
                id="address"
                name="address"
                type="text"
                value={form.address}
                onChange={handleChange}
                placeholder="123 Main St"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Portland"
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  value={form.state}
                  onChange={handleChange}
                  placeholder="OR"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="zip">ZIP Code</label>
              <input
                id="zip"
                name="zip"
                type="text"
                value={form.zip}
                onChange={handleChange}
                placeholder="97201"
              />
            </div>

            <div className="form-group">
              <label>Card Details</label>
              <div className="stripe-element">
                <CardElement options={CARD_ELEMENT_OPTIONS} />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{ width: '100%', marginTop: 'var(--space-md)' }}
              disabled={processing || !stripe || succeeded}
            >
              {processing ? (
                <>
                  <span className="spinner" style={{ width: 20, height: 20, borderWidth: 2 }} />
                  Processing…
                </>
              ) : (
                `Pay $${total.toFixed(2)} — Download Instantly`
              )}
            </button>
          </form>

          <div className="checkout-summary">
            <h3>Order Summary</h3>
            {items.map(item => (
              <div key={item.id} className="checkout-item">
                <span>
                  {categoryEmoji[item.category] || '📄'} {item.name} × {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div style={{ borderTop: '2px solid var(--color-border)', marginTop: 'var(--space-md)', paddingTop: 'var(--space-md)' }}>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Delivery</span>
                <span style={{ color: 'var(--color-success)' }}>Free</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-md)', textAlign: 'center' }}>
              🔒 Powered by Stripe · Your card info is never stored
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Checkout() {
  const { total } = useCart()

  const options = {
    mode: 'payment',
    amount: Math.round(total * 100),
    currency: 'usd',
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  )
}