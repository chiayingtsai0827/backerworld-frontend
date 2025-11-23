import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = ({ setAuth }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/login`, { username, password })
      if (res.data.success) {
        setAuth(true)
        navigate('/dashboard')
      }
    } catch (err) {
      alert('登入失敗')
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{width: '400px'}}>
        <h3 className="text-center mb-4">登入</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">帳號</label>
            <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">密碼</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary w-100">登入</button>
        </form>
        <p className="text-center mt-3">預設：admin / 123456</p>
      </div>
    </div>
  )
}

export default Login
