import { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

const CART_STORAGE_KEY = 'paper-pixel-cart'

function loadCart() {
  try {
    const data = localStorage.getItem(CART_STORAGE_KEY)
    return data ? JSON.parse(data) : { items: [] }
  } catch {
    return { items: [] }
  }
}

function cartReducer(state, action) {
  let newState
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.id === action.product.id)
      if (existing) {
        newState = {
          ...state,
          items: state.items.map(i =>
            i.id === action.product.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        }
      } else {
        newState = {
          ...state,
          items: [...state.items, { ...action.product, quantity: 1 }],
        }
      }
      break
    }
    case 'REMOVE_ITEM':
      newState = {
        ...state,
        items: state.items.filter(i => i.id !== action.id),
      }
      break
    case 'UPDATE_QUANTITY':
      newState = {
        ...state,
        items: state.items.map(i =>
          i.id === action.id
            ? { ...i, quantity: Math.max(1, action.quantity) }
            : i
        ),
      }
      break
    case 'CLEAR_CART':
      newState = { items: [] }
      break
    default:
      return state
  }
  // Persist to localStorage
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newState))
  return newState
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, null, loadCart)

  const addItem = (product) => dispatch({ type: 'ADD_ITEM', product })
  const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', id })
  const updateQuantity = (id, quantity) => dispatch({ type: 'UPDATE_QUANTITY', id, quantity })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  const itemCount = cart.items.reduce((sum, i) => sum + i.quantity, 0)
  const total = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider value={{
      items: cart.items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount,
      total,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

export default CartContext