import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Products from './components/Products'
import Cart from './components/Cart'
import Orders from './components/Orders'
import { useState } from 'react'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [theme, setTheme] = useState('blue')

  return (
    <Router>
      <div className={`min-vh-100 bg-${theme}`}>
        <Routes>
          <Route path="/" element={<Login setAuth={setIsAuthenticated} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
