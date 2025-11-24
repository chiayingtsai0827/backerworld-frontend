import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="container py-5">
      <h1 className="mb-5">Dashboard</h1>
      <div className="row g-4">
        <div className="col-md-3">
          <div className="card text-center border-success">
            <div className="card-body">
              <h5>今日營業額</h5>
              <h2 className="text-success">NT$ 428,500</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center border-info">
            <div className="card-body">
              <h5>今日訂單</h5>
              <h2 className="text-info">87</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 row g-4">
        <div className="col-md-4">
          <Link to="/products" className="btn btn-primary btn-lg w-100">產品管理</Link>
        </div>
        <div className="col-md-4">
          <Link to="/cart" className="btn btn-success btn-lg w-100">購物車</Link>
        </div>
        <div className="col-md-4">
          <Link to="/orders" className="btn btn-info btn-lg w-100">訂單列表</Link>
        </div>
      </div>
    </div>
  )
}
