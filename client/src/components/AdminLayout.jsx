
// src/components/AdminLayout.jsx
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
          {/* Ovde možeš dodati linkove za sidebar kasnije */}
          <nav>
            <Link to="/admin/products">Produkter</Link>
          </nav>
        </aside>

        <main className="main-content">
          <Outlet /> {/* Ovde će React ubaciti AdminList ili AdminNew */}
        </main>
      </div>
    </div>
  );
} 