import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="container mt-4">
      <h1>Dashboard</h1>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5>今日營業額</h5>
              <h2>NT$ 428,500</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5>今日訂單</h5>
              <h2>87</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5>低庫存警示</h5>
              <h2>12</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5>今日利潤</h5>
              <h2>NT$ 128,000</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <Link to="/products" className="btn btn-primary btn-lg w-100">產品管理</Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/cart" className="btn btn-success btn-lg w-100">購物車</Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/orders" className="btn btn-info btn-lg w-100">訂單列表</Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
