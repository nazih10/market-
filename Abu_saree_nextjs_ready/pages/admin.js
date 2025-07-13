import { useState } from 'react';

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  const handleAdd = () => {
    if (newProduct.name && newProduct.price) {
      setProducts([...products, newProduct]);
      setNewProduct({ name: "", price: "" });
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#2563eb" }}>لوحة تحكم التاجر</h2>
      <input placeholder="اسم المنتج" value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} />
      <input placeholder="السعر" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} />
      <button onClick={handleAdd}>إضافة المنتج</button>
      <ul>
        {products.map((p, i) => <li key={i}>{p.name} - {p.price}</li>)}
      </ul>
    </div>
  );
}