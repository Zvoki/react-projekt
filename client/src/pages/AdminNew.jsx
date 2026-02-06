//forma za dodavanje proizvoda 
//nakon submit → redirect na listu 
//pages/AdminNew.jsx:
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminNew() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
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

    fetch("http://localhost:8000/admin/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => nav("/admin/products"));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Ny produkt</h1>

      {Object.keys(form).map(key => (
        <input
          key={key}
          name={key}
          placeholder={key}
          value={form[key]}
          onChange={handleChange}
        />
      ))}

      <button>Lägg till</button>
    </form>
  );
}


/*
*Naravno — ovo je odličan primer male, ali veoma pametno napisane React forme. Razložiću ti sve potpuno jednostavno, deo po deo, tako da tačno razumeš šta se dešava i zašto.

---

# 🧩 Šta ova komponenta radi?

Ovo je stranica za **dodavanje novog proizvoda**.  
Sadrži:

- state sa svim poljima forme,
- funkciju za ažuriranje polja,
- funkciju za slanje forme na server,
- automatsko generisanje `<input>` polja,
- preusmeravanje nakon uspešnog dodavanja.

---

# 🔍 1. State za formu

```js
const [form, setForm] = useState({
  name: "",
  description: "",
  image: "",
  brand: "",
  sku: "",
  price: "",
  slug: ""
});
```

Ovo je jedan objekat koji sadrži sva polja forme.

Umesto da imaš 7 različitih `useState`, koristiš jedan objekat — mnogo jednostavnije.

---

# 🔍 2. Funkcija za promenu polja

```js
function handleChange(e) {
  setForm({ ...form, [e.target.name]: e.target.value });
}
```

Ovo radi sledeće:

- `e.target.name` → ime polja (npr. `"name"` ili `"price"`)
- `e.target.value` → vrednost koju je korisnik uneo
- `{ ...form }` → kopira stari form
- `[e.target.name]: e.target.value` → menja samo jedno polje

Znači: **svaki put kada korisnik nešto upiše, ažurira se odgovarajuće polje u formi**.

---

# 🔍 3. Slanje forme

```js
function handleSubmit(e) {
  e.preventDefault();
```

`preventDefault()` sprečava da se stranica osveži.

Zatim:

```js
fetch("http://localhost:3001/admin/products", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form)
})
```

Ovo šalje POST zahtev serveru sa JSON telom koje sadrži sve podatke iz forme.

Kada server završi:

```js
.then(() => nav("/admin/products"));
```

→ korisnik se preusmerava nazad na listu proizvoda.

---

# 🔍 4. Automatsko generisanje input polja

Ovo je najzanimljiviji deo:

```js
{Object.keys(form).map(key => (
  <input
    key={key}
    name={key}
    placeholder={key}
    value={form[key]}
    onChange={handleChange}
  />
))}
```

### Šta se ovde dešava?

- `Object.keys(form)` vraća listu svih polja:  
  `["name", "description", "image", "brand", "sku", "price", "slug"]`

- `map` prolazi kroz svako polje i pravi `<input>` za njega.

Znači: **ne moraš ručno da pišeš 7 input polja — React ih sam generiše**.

Svaki `<input>`:

- ima `name` koji odgovara polju u formi,
- ima `value` iz state-a,
- ima `onChange` koji ažurira state.

---

# 🔍 5. Dugme za slanje

```js
<button>Lägg till</button>
```

Klik na dugme pokreće `handleSubmit`.

---

# 🟢 Ukratko:

Ova komponenta:

- ima jedan state objekat za celu formu,
- automatski generiše input polja,
- ažurira form state kada korisnik kuca,
- šalje podatke serveru kao JSON,
- preusmerava korisnika nakon uspešnog dodavanja.

---

Ako želiš, mogu ti:

- dodati validaciju (npr. obavezna polja),
- pretvoriti inpute u `<label> + <input>` kombinaciju,
- dodati `<textarea>` za description,
- dodati upload slike,
- ili objasniti kako backend treba da izgleda.
 */
  