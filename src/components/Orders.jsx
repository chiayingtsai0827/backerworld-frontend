const Orders = () => {
  const orders = [
    { id: 1, date: '2025-11-23', total: 12900, status: '已出貨' },
    { id: 2, date: '2025-11-22', total: 25000, status: '待確認' },
    { id: 3, date: '2025-11-21', total: 18000, status: '製作中' }
  ]

  return (
    <div className="container mt-4">
      <h2>訂單列表</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>編號</th>
            <th>日期</th>
            <th>總額</th>
            <th>狀態</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>SO-{order.id}</td>
              <td>{order.date}</td>
              <td>NT$ {order.total}</td>
              <td><span className={`badge bg-${order.status === '已出貨' ? 'success' : order.status === '待確認' ? 'warning' : 'info'}`}>{order.status}</span></td>
              <td><button className="btn btn-sm btn-primary">查看</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Orders
