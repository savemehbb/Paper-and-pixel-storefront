import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3><span style={{ fontFamily: 'var(--font-display)' }}>Paper &amp; Pixel</span></h3>
          <p>Beautiful digital printables — greeting cards, journals, planners, stickers, and bundles. Instant download, zero shipping.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <ul className="footer-links">
            <li><Link to="/catalog/cards">Greeting Cards</Link></li>
            <li><Link to="/catalog/journals">Journals</Link></li>
            <li><Link to="/catalog/planners">Planners</Link></li>
            <li><Link to="/catalog/stickers">Stickers</Link></li>
            <li><Link to="/catalog/bundles">Bundles</Link></li>
          </ul>
        </div>
        <div>
          <h4>Info</h4>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping &amp; Returns</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {year} Paper &amp; Pixel. All rights reserved. Made with ✿ and care.
      </div>
    </footer>
  )
}