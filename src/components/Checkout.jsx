import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { items, total, clearCart } = useCart()
  const navigate = useNavigate()

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Basic validation
    if (!form.name || !form.email) {
      setError('Please fill in your name and email.')
      return
    }

    if (items.length === 0) {
      setError('Your cart is empty.')
      return
    }

    setProcessing(true)

    // Simulate payment processing
    // In production, this would integrate with Stripe Elements
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Generate a fake order ID
      const orderId = 'PP-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase()

      // Store order info for download page
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
    } catch (err) {
      setError('Payment processing failed. Please try again.')
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
              <label>Payment</label>
              <div className="stripe-element" style={{ padding: '1rem', textAlign: 'center', color: 'var(--color-text-muted)' }}>
                💳 Stripe payment will be integrated here in production
                <br />
                <small>For preview: clicking "Pay" completes a simulated purchase</small>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{ width: '100%', marginTop: 'var(--space-md)' }}
              disabled={processing}
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
              🔒 Secure checkout · No payment data stored
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}