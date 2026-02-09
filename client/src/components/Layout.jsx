// src/components/Layout.jsx
import { Outlet } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";
import SmallIcons from "../components/SmallIcons";
import "../styles/layout.css";
export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
      <SmallIcons />
      <Footer />
    </>
  );
}
/**
Naravno, Zvonimire — evo ti **jasno, temeljito i praktično objašnjenje** za tvoj `Layout.jsx`, baš onako kako voliš: modularno, razumljivo i korisno za tvoje učenje i buduće projekte.

---

# 🧱 Što je zapravo Layout komponenta?

Layout je **okvir** (eng. *page shell*) koji se prikazuje na svakoj stranici.  
On sadrži elemente koji se **ne mijenjaju** dok korisnik navigira:

- Header  
- Footer  
- Globalni `<main>` kontejner  
- `<Outlet />` — mjesto gdje se prikazuje sadržaj trenutne rute

Drugim riječima:

> Layout je kao “template” koji sve tvoje stranice koriste.

---

# 🔍 Objašnjenje koda liniju po liniju

```jsx
import { Outlet } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";
```

### Što se ovdje događa?

- `Outlet` dolazi iz React Routera i predstavlja **mjesto gdje će se prikazati child route**.
- `Header` i `Footer` su tvoje komponente koje želiš prikazati na svakoj stranici.

---

```jsx
export default function Layout() {
```

### Ovo definira funkcijsku komponentu

React će je koristiti kao “wrapper” za sve tvoje stranice.

---

```jsx
  return (
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </>
  );
}
```

### Što se ovdje događa?

### 1. `<Header />`
Prikazuje navigaciju, logo, search bar — sve što treba biti na vrhu svake stranice.

### 2. `<main>`
Semantički HTML element za glavni sadržaj stranice.

### 3. `<Outlet />`
Ovo je **najvažniji dio**.

React Router v6 radi ovako:

- Parent route (Layout) se renderuje
- Child route (Home, Search, Product…) se ubacuje **na mjesto gdje stoji `<Outlet />`**

Primjer:

Ako korisnik otvori `/search`, React Router radi:

- Renderuje `<Layout />`
- U `<Outlet />` ubacuje `<Search />`

Dakle rezultat u DOM‑u izgleda ovako:

```
<Header />
<main>
   <Search />   ← ovo je ubacio Outlet
</main>
<Footer />
```

### 4. `<Footer />`
Prikazuje se na dnu svake stranice.

### 5. `<>...</>`
React fragment — omogućava vraćanje više elemenata bez dodatnog wrapper `<div>`.

---

# 🎯 Zašto je Layout ključan u React Routeru v6?

Bez Layouta:

- morao bi ručno dodavati Header i Footer na svaku stranicu
- navigacija bi se resetirala pri svakom reloadu
- struktura bi bila ponavljajuća i teža za održavanje

S Layoutom:

- sve stranice dijele isti okvir
- kod je čist, modularan i skalabilan
- možeš lako dodati sidebar, breadcrumbs, globalne kontejnere…

---

# 🧠 Kako Layout radi s tvojim App.jsx

Tvoj App.jsx koristi nested routes:

```jsx
<Route element={<Layout />}>
  <Route path="/" element={<Home />} />
  <Route path="/search" element={<Search />} />
  <Route path="/products/:slug" element={<Product />} />
</Route>
```

To znači:

- Layout je parent
- Home, Search i Product su children
- `<Outlet />` prikazuje child komponentu

---

# 📌 Mentalni model (za pamćenje)

**Layout = okvir**  
**Outlet = rupa u okviru gdje se ubacuje trenutna stranica**

---

Ako želiš, mogu ti nacrtati i vizualni dijagram toka Layout → Outlet → Route renderiranja, što bi ti savršeno sjelo uz tvoje vizualno učenje.
 * 
 */