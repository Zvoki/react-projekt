//forma za dodavanje proizvoda 
//nakon submit → redirect na listu 
//pages/AdminNew.jsx:
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

export default function AdminNew() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    namn: "",
    description: "",
    image_url: "",
    brand: "",
    sku: "",
    price: "",
    slug: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${API}/admin/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => nav("/admin/products"));
  }

  return (
    <section>
      <h1>Ny produkt</h1>
      {/* Dodajemo klasu form-column koju tvoj CSS već ima */}
      <form onSubmit={handleSubmit} className="form-column">
        
        {/* Svaki label ima htmlFor koji se poklapa sa id-om na inputu */}
      
      <label htmlFor="namn">Namn</label>
      <input 
        id="namn"
        name="namn" 
        value={form.namn} 
        onChange={handleChange} 
        required 
        //autoComplete="name" 
      />

      <label htmlFor="description">Beskrivning</label>
      <textarea 
        id="description"
        name="description" 
        value={form.description} 
        onChange={handleChange} 
        rows="4" 
        autoComplete="off"
      />

      <label htmlFor="image_url">Bild URL</label>
      <input 
        id="image_url"
        name="image_url" 
        value={form.image_url} 
        onChange={handleChange} 
        autoComplete="url"
      />

      <label htmlFor="brand">Märke (Brand)</label>
      <input 
        id="brand"
        name="brand" 
        value={form.brand} 
        onChange={handleChange} 
        autoComplete="organization"
      />

      <label htmlFor="sku">SKU</label>
      <input 
        id="sku"
        name="sku" 
        value={form.sku} 
        onChange={handleChange} 
        required 
        autoComplete="off"
      />

      <label htmlFor="price">Pris</label>
      <input 
        id="price"
        type="number" 
        name="price" 
        value={form.price} 
        onChange={handleChange} 
        required 
        autoComplete="off"
      />

      <label htmlFor="slug">Slug</label>
      <input 
        id="slug"
        name="slug" 
        value={form.slug} 
        onChange={handleChange} 
        required 
        autoComplete="off"
      />

      <button type="submit">Lägg till</button>
    </form>
  </section>
);
}