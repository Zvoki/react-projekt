import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

export default function AdminList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/admin/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Fel när produkter skule visas:", err));
    }, []);

    return (
        <section>
            {/* Ovaj deo pravi identičan raspored kao u starom projektu */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1>Produkter</h1>
                <Link to="/admin/products/new">
                    <button>Ny produkt</button>
                </Link>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Namn</th>
                        <th>SKU</th>
                        <th>Pris</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map(p => (
                        <tr key={p.id || p.sku}>
                            {/* Proveri da li tvoja baza vraća p.name ili p.namn kao u starom kodu */}
                            <td>{p.name || p.namn}</td>
                            <td>{p.sku}</td>
                            {/* {typeof p.price === 'string'
                                ? p.price
                                : formatPrice(p.price)}ako je cena već String (npr. "199 SEK") prikaži direktno, inace formatiraj broj */}
                            <td>{formatPrice(p.price)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

/*prikazati tabelu svih proizvoda 
link “Ny produkt” vodi na formu */

/*
## 🧠 Šta se ovde dešava?

### 1. **Uvoz React funkcija**
```js
import { useEffect, useState } from "react";
```
- **useState** omogućava da komponenta ima svoje stanje (state).
- **useEffect** omogućava da se neki kod izvrši kada se komponenta učita.

---

### 2. **Uvoz Link komponente**
```js
import { Link } from "react-router-dom";
```
- Ovo služi za navigaciju između stranica, ali u ovom kodu se još ne koristi.

---

### 3. **Definicija komponente**
```js
export default function AdminList() {
```
- Ovo je React komponenta koja se zove **AdminList**.

---

### 4. **State za proizvode**
```js
const [products, setProducts] = useState([]);
```
- Pravimo promenljivu **products** (lista proizvoda).
- Početna vrednost je prazna lista `[]`.
- **setProducts** je funkcija kojom kasnije menjamo tu listu.

---

### 5. **useEffect – učitavanje podataka sa servera**
```js
useEffect(() => {
    fetch("http:lokalhost:3001/admin/products")
        .then(res => res.json())
        .then(data => setProducts(data));
}, []);
```

- useEffect se pokreće **samo jednom**, kada se komponenta učita (zbog `[]`).
- `fetch(...)` šalje zahtev serveru da uzme listu proizvoda.
- `res.json()` pretvara odgovor u JavaScript objekat.
- `setProducts(data)` čuva te podatke u state-u.
## 🧩 Ukratko:

- Komponenta se učita.
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AdminList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/admin/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Greška pri učitavanju:", err));
    }, []);

    return (
        <section>
            
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1>Produkter</h1>
                <Link to="/admin/products/new">
                    <button>Ny produkt</button>
                </Link>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Namn</th>
                        <th>SKU</th>
                        <th>Pris</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map(p => (
                        <tr key={p.id || p.sku}>
                           
                            <td>{p.name || p.namn}</td>
                            <td>{p.sku}</td>
                            <td>{p.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section >
    );



/*
products.map(p => (
    <tr key={p.id}>
        <td>{p.sku}</td>
        <td>{p.price}</td>
    </tr>
))

*Prođi kroz svaki proizvod u listi
✔️ Za svaki proizvod napravi jedan <tr> red u tabeli
✔️ Ubaci SKU i cenu u <td> ćelije
✔️ key={p.id} služi React-u da zna koji red je koji
 */
