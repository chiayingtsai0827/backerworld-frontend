export default function Orders() {
  const orders = [
    { no: 'SO-20251123-001', date: '2025-11-23', total: 12900, status: '已出貨' },
    { no: 'SO-20251122-005', date: '2025-11-22', total: 25000, status: '待確認' }
  ]

  return (
    <div className="container py-5">
      <h2 className="mb-4">訂單列表</h2>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr><th>訂單編號</th><th>日期</th><th>總額</th><th>狀態</th></tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o.no}>
              <td>{o.no}</td>
              <td>{o.date}</td>
              <td>NT$ {o.total.toLocaleString()}</td>
              <td><span className="badge bg-success">{o.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
