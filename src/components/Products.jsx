import { useState } from 'react'

const fakeProducts = [
  { id: 1, name: '無線藍牙耳機 Pro', cost: 850, price: 1880, stock: 8 },
  { id: 2, name: '304不鏽鋼保溫杯', cost: 320, price: 699, stock: 156 }
]

export default function Products() {
  const [search, setSearch] = useState('')
  const filtered = fakeProducts.filter(p => p.name.includes(search))

  return (
    <div className="container py-5">
      <h2 className="mb-4">產品管理</h2>
      <input 
        type="text" 
        className="form-control mb-4" 
        placeholder="搜尋產品..." 
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>名稱</th>
            <th>成本</th>
            <th>售價</th>
            <th>庫存</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>NT$ {p.cost}</td>
              <td>NT$ {p.price}</td>
              <td>{p.stock}</td>
              <td><button className="btn btn-sm btn-primary">加入購物車</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
