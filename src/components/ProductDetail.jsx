import { useParams, Link } from 'react-router-dom'
import { getProductById, getCategoryInfo } from '../data/products'
import { useCart } from '../context/CartContext'
import { useState } from 'react'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="page-header">
        <h1>Product Not Found</h1>
        <p>This product doesn't seem to exist.</p>
        <Link to="/catalog/all" className="btn btn-primary" style={{ marginTop: 'var(--space-lg)' }}>
          Browse Products
        </Link>
      </div>
    )
  }

  const catInfo = getCategoryInfo(product.category)
  const categoryEmoji = {
    cards: '✉️',
    journals: '📓',
    planners: '📅',
    stickers: '✨',
    bundles: '🎁',
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="product-detail fade-in">
      <div className="container">
        <div style={{ marginBottom: 'var(--space-lg)' }}>
          <Link to={`/catalog/${product.category}`} className="btn btn-ghost btn-sm">
            ← Back to {catInfo?.name || product.category}
          </Link>
        </div>

        <div className="product-detail-layout">
          <div className={`product-detail-image category-${product.category}`}>
            <div className="placeholder" style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 'var(--space-md)',
              color: 'var(--color-text-muted)',
            }}>
              <span style={{ fontSize: '4rem' }}>{categoryEmoji[product.category] || '📄'}</span>
              <span style={{ fontSize: '1rem' }}>Product Design Preview</span>
            </div>
          </div>

          <div className="product-detail-info">
            <span className="category-badge">{catInfo?.icon} {catInfo?.name || product.category}</span>
            <h1>{product.name}</h1>
            <div className="product-detail-price">${product.price.toFixed(2)}</div>
            <p className="product-detail-description">{product.longDescription || product.description}</p>

            <ul className="product-detail-features">
              {product.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>

            <div className="quantity-selector">
              <label>Quantity:</label>
              <div className="quantity-controls">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(Math.min(10, quantity + 1))}>+</button>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
              <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>
                {added ? '✓ Added to Cart!' : 'Add to Cart — $' + (product.price * quantity).toFixed(2)}
              </button>
            </div>

            <p style={{
              marginTop: 'var(--space-md)',
              fontSize: '0.85rem',
              color: 'var(--color-text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-sm)',
            }}>
              🔒 Secure checkout · Instant download · Print at home
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}