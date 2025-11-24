import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (username === 'admin' && password === '123456') {
      setUser({ username })
      navigate('/dashboard')
    } else {
      alert('帳號或密碼錯誤')
    }
  }

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow" style={{width: '400px'}}>
        <div className="card-body p-5">
          <h3 className="text-center mb-4">Backer World 登入</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">帳號</label>
              <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="mb-4">
              <label className="form-label">密碼</label>
              <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary w-100">登入</button>
            <p className="text-center mt-3 text-muted">預設：admin / 123456</p>
          </form>
        </div>
      </div>
    </div>
  )
}
