
// src/components/AdminLayout.jsx
// This component serves as the layout for all admin-related pages. 
// It includes a header, a sidebar for navigation, and a main content area 
// where the specific admin page will be rendered based on the route.

import { Outlet, Link } from "react-router-dom";
import "../styles/admin-style.css";

export default function AdminLayout() {
  return (
    <div className="admin-body-wrapper">
      <header className="admin-header">
        Administration
      </header>

      <div className="container">
        <aside className="sidebar">
          {}
          <nav>
            <Link to="/admin/products">Produkter</Link>
          </nav>
        </aside>

        <main className="main-content">
          <Outlet /> {}
        </main>
      </div>
    </div>
  );
} 