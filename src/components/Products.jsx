import { useState, useEffect } from 'react'
import axios from 'axios'

const Products = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`)
      setProducts(res.data)
    } catch (err) {
      // 模擬資料
      setProducts([
        { id: 1, name: '無線藍牙耳機 Pro', cost: 850, price: 1880, stock: 8 },
        { id: 2, name: '304不鏽鋼保溫杯', cost: 320, price: 699, stock: 156 }
      ])
    }
  }

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="container mt-4">
      <h2>產品管理</h2>
      <input type="text" className="form-control mb-3" placeholder="搜尋產品..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>名稱</th>
            <th>成本</th>
            <th>售價</th>
            <th>庫存</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>NT$ {p.cost}</td>
              <td>NT$ {p.price}</td>
              <td>{p.stock}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2" onClick={() => addToCart(p)}>加入購物車</button>
                <button className="btn btn-sm btn-warning">編輯</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const addToCart = (product) => {
  alert(`已加入購物車: ${product.name}`)
}

export default Products
