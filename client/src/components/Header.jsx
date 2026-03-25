
// src/components/Header.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const nav = useNavigate();
  const [q, setQ] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    nav(`/search?q=${q}`);
  }

  return (
    <header className="header">

      {/* RED 1 — Logo + Search + Ikoner */}
      <div className="header-top">

        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="/images/200x100.svg" alt="Logo" className="responsive" />
          </Link>
        </div>

        {/* Search + Ikone */}
        <div className="logo-bottom">

          {/* Search bar */}
          <form className="search-bar" onSubmit={handleSubmit}>
            <input className="input-field" id="search-input" name="q"
              type="search"
              placeholder="Sök bland produkter"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </form>

          {/* Ikone */}
          <div className="icons">
           <a><img src="/images/suit-heart-fill.svg" alt="Hjärta" /></a>
            <a><img src="/images/basket2.svg" alt="Väska" /></a>
          </div>
        </div>
      </div>

      {/* RAD 2 — Navbar */}
      <div className="navbar">
        <ul className="tags">
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/bestsellers">Bestsäljare</Link></li>
          <li><Link to="/women">Kvinnor</Link></li>
          <li><Link to="/men">Män</Link></li>
        </ul>
      </div>
    </header>
  );
}
