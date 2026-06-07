import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  const categoryEmoji = {
    cards: '✉️',
    journals: '📓',
    planners: '📅',
    stickers: '✨',
    bundles: '🎁',
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card card">
      <div className={`product-card-image category-${product.category}`}>
        <div className="placeholder">
          <div className="placeholder-icon">{categoryEmoji[product.category] || '📄'}</div>
          <span>Design Preview</span>
        </div>
      </div>
      <div className="product-card-body">
        <span className="category-tag">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-card-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <span className="badge">Instant Download</span>
        </div>
      </div>
    </Link>
  )
}