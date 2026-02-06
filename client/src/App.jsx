import Layout from "./components/Layout";
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Search from "./pages/Search";
import Product from "./pages/Product";
import AdminList from "./pages/AdminList";
import AdminNew from "./pages/AdminNew";

import './App.css'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} />
        <Route path="/" element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path="/products/:slug" element={<Product />} />
      </Routes>
      <Route path="/admin/products" element={<AdminList />} />
      <Route path='/admin/products/new' element={<AdminNew />} />


    </BrowserRouter>

  );
}


