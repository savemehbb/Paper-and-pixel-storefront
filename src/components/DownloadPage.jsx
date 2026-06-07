import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function DownloadPage() {
  const { orderId } = useParams()
  const navigate = useNavigate()
  const [order, setOrder] = useState(null)
  const [downloaded, setDownloaded] = useState({})

  useEffect(() => {
    const data = localStorage.getItem(`order-${orderId}`)
    if (data) {
      setOrder(JSON.parse(data))
    }
  }, [orderId])

  if (!order) {
    return (
      <div className="download-page">
        <div className="container">
          <h2>Order not found</h2>
          <p className="order-info">We couldn't find this order. It may have expired.</p>
          <Link to="/catalog/all" className="btn btn-primary">Shop Again</Link>
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

  const storedOrders = JSON.parse(localStorage.getItem('previous-downloads') || '[]')
  if (!storedOrders.includes(orderId)) {
    storedOrders.push(orderId)
    localStorage.setItem('previous-downloads', JSON.stringify(storedOrders))
  }

  const handleDownload = (itemId) => {
    setDownloaded(prev => ({ ...prev, [itemId]: true }))
    const item = order.items.find(i => i.id === itemId)
    if (!item) return

    const downloadUrl = item.downloadPath || `/downloads/${item.category}/${item.id}.pdf`
    const a = document.createElement('a')
    a.href = downloadUrl
    a.download = `${item.name.replace(/\s+/g, '-').toLowerCase()}.pdf`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <div className="download-page fade-in">
      <div className="container">
        <div className="download-success-icon">🎉</div>
        <h1>Thank You, {order.name}!</h1>
        <p className="order-info">
          Your order <strong>{orderId}</strong> is confirmed.
          <br />
          A receipt has been sent to <strong>{order.email}</strong>
        </p>

        <h3 style={{ marginBottom: 'var(--space-lg)' }}>Your Downloads</h3>

        <div className="download-items">
          {order.items.map(item => (
            <div key={item.id + item.quantity} className="download-item">
              <div className="download-item-icon">
                {categoryEmoji[item.category] || '📄'}
              </div>
              <div className="download-item-info">
                <h4>{item.name}</h4>
                <span className="file-type">PDF · {item.quantity} copy{item.quantity > 1 ? 'ies' : ''}</span>
              </div>
              <button
                className={`btn ${downloaded[item.id] ? 'btn-secondary' : 'btn-primary'} btn-sm download-btn`}
                onClick={() => handleDownload(item.id)}
              >
                {downloaded[item.id] ? '✓ Downloaded' : 'Download'}
              </button>
            </div>
          ))}
        </div>

        {order.items.some(i => downloaded[i.id]) && (
          <div className="message message-success" style={{ maxWidth: 500, margin: 'var(--space-xl) auto' }}>
            ✓ Downloads started! Files are saved to your downloads folder.
          </div>
        )}

        <div style={{ marginTop: 'var(--space-2xl)' }}>
          <Link to="/catalog/all" className="btn btn-primary btn-lg">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}