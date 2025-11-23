import { useState } from 'react'
import jsPDF from 'jspdf'

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: '無線藍牙耳機 Pro', quantity: 5, price: 1880 },
    { id: 2, name: '304不鏽鋼保溫杯', quantity: 10, price: 699 }
  ])

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0)

  const updateQuantity = (id, qty) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: qty } : item))
  }

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const generatePDF = () => {
    const doc = new jsPDF('p', 'mm', 'a4')
    doc.setFontSize(20)
    doc.text('◉◉有限公司 採購訂單', 80, 20)
    doc.setFontSize(12)
    doc.text(`訂單編號：SO-20251123-001　日期：2025-11-23`, 80, 35)
    let y = 60
    cart.forEach((item, index) => {
      doc.text(`${index+1}. ${item.name}`, 20, y)
      doc.text(`數量: ${item.quantity}　單價: NT$${item.price}　小計: NT$${item.quantity * item.price}`, 20, y + 5)
      y += 15
    })
    doc.text(`總計: NT$ ${total}`, 20, y)
    doc.text('公司地址：台北市◉◉路 100 號　電話：02-12345678', 20, y + 10)
    doc.text('謝謝您的訂購！', 20, y + 20)
    doc.save('order.pdf')
  }

  return (
    <div className="container mt-4">
      <h2>購物車</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>產品</th>
            <th>數量</th>
            <th>單價</th>
            <th>小計</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td><input type="number" value={item.quantity} className="form-control w-auto d-inline" min="1" onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} /></td>
              <td>NT$ {item.price}</td>
              <td>NT$ {item.quantity * item.price}</td>
              <td><button className="btn btn-sm btn-danger" onClick={() => removeItem(item.id)}>移除</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-end mb-3 fs-4 fw-bold">總計: NT$ {total}</div>
      <div className="text-end">
        <button className="btn btn-success btn-lg" onClick={generatePDF}>生成 PDF 訂單</button>
      </div>
    </div>
  )
}

export default Cart
