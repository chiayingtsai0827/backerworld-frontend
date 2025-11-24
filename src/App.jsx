import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Products from './components/Products'
import Cart from './components/Cart'
import Orders from './components/Orders'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <Routes>
        <Route path="/" element={!user ? <Login setUser={setUser} /> : <Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/products" element={user ? <Products /> : <Navigate to="/" />} />
        <Route path="/cart" element={user ? <Cart /> : <Navigate to="/" />} />
        <Route path="/orders" element={user ? <Orders /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
