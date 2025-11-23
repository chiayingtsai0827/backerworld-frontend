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

  import jsPDF from 'jspdf'  // ← 加這行！jsPDF 載入

const generatePDF = async () => {
  try {
    const doc = new jsPDF('p', 'mm', 'a4')

    // 動態載入中文字型
    const fontUrl = 'https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-sc@5.0.18/files/noto-sans-sc-chinese-traditional-400-normal.ttf'
    const fontResponse = await fetch(fontUrl)
    if (!fontResponse.ok) throw new Error('字型載入失敗')
    const fontArrayBuffer = await fontResponse.arrayBuffer()

    doc.addFileToVFS('NotoSans.ttf', fontArrayBuffer)
    doc.addFont('NotoSans.ttf', 'NotoSans', 'normal')
    doc.setFont('NotoSans')

    // 標題
    doc.setFontSize(20)
    doc.text('◉◉有限公司 採購訂單', 105, 20, { align: 'center' })

    // 資訊
    doc.setFontSize(12)
    doc.text(`訂單編號：SO-${new Date().toISOString().slice(0,10).replace(/-/g, '')}-001`, 20, 35)
    doc.text(`日期：${new Date().toLocaleDateString('zh-TW')}`, 20, 42)

    // 表格標頭
    doc.setFontSize(11)
    doc.text('項次', 20, 58)
    doc.text('品名', 40, 58)
    doc.text('數量', 100, 58, { align: 'center' })
    doc.text('單價', 130, 58, { align: 'center' })
    doc.text('金額', 170, 58, { align: 'center' })

    // 表格內容
    let y = 70
    cart.forEach((item, i) => {
      doc.text(`${i + 1}`, 20, y)
      doc.text(item.name, 40, y)
      doc.text(`${item.quantity}`, 100, y, { align: 'center' })
      doc.text(`NT$${item.price.toLocaleString()}`, 130, y, { align: 'center' })
      doc.text(`NT$${(item.quantity * item.price).toLocaleString()}`, 170, y, { align: 'center' })
      y += 10
    })

    // 總計
    doc.setFontSize(14)
    doc.text(`總計：NT$ ${total.toLocaleString()}`, 170, y, { align: 'center' })

    // 公司資訊
    doc.setFontSize(10)
    doc.text('公司地址：台北市◉◉路 100 號　電話：02-12345678', 20, y + 20)
    doc.text('謝謝您的訂購！', 20, y + 30)

    doc.save(`採購訂單_${new Date().toISOString().slice(0,10)}.pdf`)
  } catch (err) {
    alert('PDF 生成失敗：' + err.message)
  }
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
