import { useState } from 'react'
import jsPDF from 'jspdf'

export default function Cart() {
  const [cart, setCart] = useState([
    { name: '無線藍牙耳機 Pro', qty: 5, price: 1880 },
    { name: '304不鏽鋼保溫杯', qty: 10, price: 699 }
  ])

  const total = cart.reduce((sum, i) => sum + i.qty * i.price, 0)

  const generatePDF = async () => {
    const doc = new jsPDF()
    const fontUrl = 'https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-tc@5.0.18/files/noto-sans-tc-chinese-traditional-400-normal.ttf'
    const font = await fetch(fontUrl).then(res => res.arrayBuffer())
    
    doc.addFileToVFS('NotoSans.ttf', font)
    doc.addFont('NotoSans.ttf', 'NotoSans', 'normal')
    doc.setFont('NotoSans')

    doc.setFontSize(20)
    doc.text('◉◉有限公司 採購訂單', 105, 20, { align: 'center' })
    doc.setFontSize(12)
    doc.text(`訂單編號：SO-${new Date().toISOString().slice(0,10).replace(/-/g,'')}-001`, 20, 35)
    doc.text(`日期：${new Date().toLocaleDateString('zh-TW')}`, 20, 42)

    let y = 60
    cart.forEach((item, i) => {
      doc.text(`${i+1}`, 20, y)
      doc.text(item.name, 35, y)
      doc.text(`${item.qty}`, 110, y)
      doc.text(`NT$${item.price.toLocaleString()}`, 140, y)
      doc.text(`NT$${(item.qty*item.price).toLocaleString()}`, 170, y)
      y += 12
    })

    doc.setFontSize(14)
    doc.text(`總計：NT$ ${total.toLocaleString()}`, 170, y + 10, { align: 'right' })
    doc.save('採購訂單.pdf')
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">購物車</h2>
      <table className="table">
        <thead><tr><th>品名</th><th>數量</th><th>單價</th><th>小計</th></tr></thead>
        <tbody>
          {cart.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td><input type="number" className="form-control w-25" value={item.qty} /></td>
              <td>NT$ {item.price.toLocaleString()}</td>
              <td>NT$ {(item.qty*item.price).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-end fs-3 fw-bold mb-4">總 Kid: NT$ {total.toLocaleString()}</div>
      <button onClick={generatePDF} className="btn btn-success btn-lg">生成 PDF 訂單</button>
    </div>
  )
}
