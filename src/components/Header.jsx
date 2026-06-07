import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useState } from 'react'

export default function Header() {
  const { itemCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">✿</span>
          Paper &amp; Pixel
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/catalog/all" className="nav-link" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/catalog/cards" className="nav-link" onClick={() => setMenuOpen(false)}>Cards</Link>
          <Link to="/catalog/journals" className="nav-link" onClick={() => setMenuOpen(false)}>Journals</Link>
          <Link to="/catalog/planners" className="nav-link" onClick={() => setMenuOpen(false)}>Planners</Link>
          <Link to="/catalog/stickers" className="nav-link" onClick={() => setMenuOpen(false)}>Stickers</Link>
          <Link to="/cart" className="cart-button" onClick={() => setMenuOpen(false)}>
            🛒 Cart
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  )
}