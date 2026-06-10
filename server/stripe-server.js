const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// API routes
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'usd' } = req.body

    if (!amount || amount < 0.5) {
      return res.status(400).json({ error: 'Invalid amount (minimum $0.50)' })
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency,
      automatic_payment_methods: { enabled: true },
    })

    res.json({ clientSecret: paymentIntent.client_secret })
  } catch (err) {
    console.error('Stripe error:', err)
    res.status(500).json({ error: err.message })
  }
})

// Serve built frontend
const distPath = path.join(__dirname, '..', 'dist')
app.use(express.static(distPath))

// SPA catch-all: serve index.html for any non-API route
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) return res.status(404).json({ error: 'Not found' })
  res.sendFile(path.join(distPath, 'index.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Paper & Pixel server running on port ${PORT}`)
})