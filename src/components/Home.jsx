import { Link } from 'react-router-dom'
import { categories } from '../data/products'

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="hero">
        <h1>Beautiful Printables,<br />Instantly Yours</h1>
        <p>
          Greeting cards, journals, planners, and stickers — designed with care,
          delivered digitally. Zero shipping, zero wait.
        </p>
        <div className="hero-buttons">
          <Link to="/catalog/all" className="btn btn-primary btn-lg">
            Shop All Products
          </Link>
          <Link to="/catalog/cards" className="btn btn-secondary btn-lg">
            Browse Cards
          </Link>
        </div>
      </section>

      {/* Categories section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Shop by Category</h2>
            <p>Find exactly what you're looking for</p>
          </div>
          <div className="featured-categories">
            {categories.map(cat => (
              <Link
                key={cat.id}
                to={`/catalog/${cat.id}`}
                className="category-card"
              >
                <div className="category-icon">{cat.icon}</div>
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="section" style={{ background: 'var(--color-tan)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Why Paper &amp; Pixel?</h2>
          </div>
          <div className="grid-3" style={{ marginTop: 'var(--space-xl)' }}>
            <div className="card" style={{ padding: 'var(--space-xl)', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--space-md)' }}>⚡</div>
              <h3>Instant Download</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginTop: 'var(--space-sm)' }}>
                No shipping, no waiting. Your purchase is ready to download the moment you buy.
              </p>
            </div>
            <div className="card" style={{ padding: 'var(--space-xl)', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--space-md)' }}>🎨</div>
              <h3>Beautiful Design</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginTop: 'var(--space-sm)' }}>
                Every product is thoughtfully designed with love. Print-ready quality at 300 DPI.
              </p>
            </div>
            <div className="card" style={{ padding: 'var(--space-xl)', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--space-md)' }}>♻️</div>
              <h3>Print at Home</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginTop: 'var(--space-sm)' }}>
                Print what you need, when you need it. No waste, no minimum order.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}