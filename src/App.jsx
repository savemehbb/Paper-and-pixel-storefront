import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Catalog from './components/Catalog'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import DownloadPage from './components/DownloadPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog/:category?" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/download/:orderId" element={<DownloadPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App