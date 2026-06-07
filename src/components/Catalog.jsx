import { useParams, Link } from 'react-router-dom'
import { categories, getProductsByCategory, getCategoryInfo } from '../data/products'
import ProductCard from './ProductCard'

export default function Catalog() {
  const { category = 'all' } = useParams()
  const products = getProductsByCategory(category)
  const catInfo = getCategoryInfo(category)
  const title = catInfo ? `${catInfo.icon} ${catInfo.name}` : 'All Products'
  const desc = catInfo ? catInfo.description : 'Browse our full collection of beautiful printables'

  return (
    <div className="catalog-page fade-in">
      <div className="page-header">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>

      <div className="container">
        <div className="catalog-filters">
          <Link
            to="/catalog/all"
            className={`filter-btn ${category === 'all' ? 'active' : ''}`}
          >
            All
          </Link>
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/catalog/${cat.id}`}
              className={`filter-btn ${category === cat.id ? 'active' : ''}`}
            >
              {cat.icon} {cat.name}
            </Link>
          ))}
        </div>

        {products.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 'var(--space-3xl) 0' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
              No products found in this category.
            </p>
            <Link to="/catalog/all" className="btn btn-primary" style={{ marginTop: 'var(--space-lg)' }}>
              View All Products
            </Link>
          </div>
        ) : (
          <div className="grid-3">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div style={{ height: 'var(--space-3xl)' }} />
      </div>
    </div>
  )
}