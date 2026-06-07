import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, itemCount, total } = useCart()

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="cart-empty">
            <div className="cart-empty-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything yet. Let's fix that!</p>
            <Link to="/catalog/all" className="btn btn-primary btn-lg">
              Start Shopping
            </Link>
          </div>
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
    <div className="cart-page fade-in">
      <div className="container">
        <div className="page-header" style={{ paddingBottom: 'var(--space-xl)' }}>
          <h1>Shopping Cart</h1>
          <p>{itemCount} item{itemCount !== 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                {categoryEmoji[item.category] || '📄'}
              </div>
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <span className="item-price">${item.price.toFixed(2)} each</span>
              </div>
              <div className="cart-item-actions">
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <span className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-xl)' }}>
          <button className="btn btn-ghost btn-sm" onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal ({itemCount} items)</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Digital Delivery</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Link to="/checkout" className="btn btn-primary">
            Proceed to Checkout
          </Link>
          <Link to="/catalog/all" className="btn btn-secondary" style={{ width: '100%', marginTop: 'var(--space-sm)' }}>
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}