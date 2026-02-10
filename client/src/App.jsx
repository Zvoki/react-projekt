
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout";
import "./styles/layout.css"
import Home from "./pages/Home";
import Search from "./pages/Search";
import Product from "./pages/Product";
import AdminList from "./pages/AdminList";
import AdminNew from "./pages/AdminNew";
import AdminLayout from './components/AdminLayout';

import './App.css'

export default function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
           <Route path="/" element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path="/products/:slug" element={<Product />} />
          </Route>
        {/* ADMIN DEO: Potpuno odvojen izgled */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="products" element={<AdminList />} />
          <Route path="products/new" element={<AdminNew />} />
        
        </Route>
      </Routes>
    </BrowserRouter>

  );
}


