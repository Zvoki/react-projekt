/*logo vodi na / 
search bar 
navigacija: Nyheter, Topplistan, Rea, Kampanjer 
*/
// src/components/Header.jsx
// src/components/Header.jsx
// src/components/Header.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const nav = useNavigate();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    nav(`/search?q=${q}`);
    setOpen(false)
  }

  return (
    <header className="site-header">
      <Link to="/" className="logo">Freaky Fashion</Link>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Sök produkt"
          value={q}
          onChange={e => setQ(e.target.value)}
        />
      </form>
      <button
        className={`hamburger ${open ? "is-open" : ""}`}
        onClick={() => setOpen(o => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav>
        <Link to="#">Nyheter</Link>
        <Link to="#">Topplistan</Link>
        <Link to="#">Rea</Link>
        <Link to="#">Kampanjer</Link>
      </nav>
    </header>
  );
}