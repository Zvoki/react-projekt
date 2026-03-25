
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

  // The App component sets up client-side routing using React Router.
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
           <Route path="/" element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path="/products/:slug" element={<Product />} />
          </Route>
        {/* ADMIN */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="products" element={<AdminList />} />
          <Route path="products/new" element={<AdminNew />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
/*<BrowserRouter> wraps the app to handle URL history.
Nested routes let you reuse layouts (<Layout> or <AdminLayout>).
Dynamic segment :slug is read by useParams() in the Product page.
Admin pages live under /admin with their own layout, demonstrating route isolation.
Changing the URL updates the view without a full page reload.*/


