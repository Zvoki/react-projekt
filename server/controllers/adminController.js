// server/controllers/adminController.js
import { getAllProducts, createProduct } from "../db/queries.js";

export async function adminList(req, res) {
  const products = getAllProducts();
  res.json(products);
}

export async function adminCreate(req, res) {
 createProduct(req.body);
  res.json({ message: "Product created" });
}

/*
// 4. Admin — lista svih proizvoda
export async function getAllProducts() {
const db = await openDB();
return db.all("SELECT * FROM all products"); 
}
// 5. Admin — dodavanje proizvoda
export async function createProduct(product) {
  const db = await openDB();
  const { name, description, image, brand, sku, price, slug } = product;


# 🧩 **1. Šta radi ovaj import?**

```js
import { getAllProducts, createProduct } from "../db/queries.js";
```

Ovim potezom **controller** dobija pristup SQL funkcijama koje se nalaze u `queries.js`.

- `getAllProducts` → SQL SELECT  
- `createProduct` → SQL INSERT  

Drugim riječima:

**Controller ne zna SQL.  
Queries ne zna Express.  
Import ih povezuje.**

---

# 🟦 **2. adminList() — tok podataka**

```js
export async function adminList(req, res) {
  const products = await getAllProducts();
  res.json(products);
}
```

### ✔️ Šta se ovdje dešava?

1. Express ruta poziva `adminList()`
2. `adminList()` poziva SQL funkciju `getAllProducts()`
3. `getAllProducts()` otvara SQLite bazu i radi:

```sql
SELECT * FROM products;
```

4. Rezultat (array proizvoda) se vraća controlleru
5. Controller vraća JSON React admin panelu

### Vizuelno:

```
Admin → GET /admin/products
        ↓
adminList()
        ↓
getAllProducts()
        ↓
SQLite: SELECT * FROM products
        ↓
products[]
        ↓
res.json(products)
```

---

# 🟩 **3. adminCreate() — tok podataka**

```js
export async function adminCreate(req, res) {
  await createProduct(req.body);
  res.json({ message: "Product created" });
}
```

### ✔️ Šta se ovdje dešava?

1. Admin pošalje POST formu (name, price, sku…)
2. Express ruta poziva `adminCreate()`
3. `adminCreate()` uzima podatke iz `req.body`
4. Poziva SQL funkciju `createProduct(req.body)`
5. `createProduct()` radi:

```sql
INSERT INTO products (...)
VALUES (...)
```

6. Controller vraća JSON poruku

### Vizuelno:

```
Admin → POST /admin/products
        ↓
adminCreate(req.body)
        ↓
createProduct(product)
        ↓
SQLite: INSERT INTO products ...
        ↓
OK
        ↓
res.json({ message: "Product created" })
```

---

# 🧠 **4. Kako queries.js izgleda u pozadini**

### ✔️ getAllProducts()

```js
export async function getAllProducts() {
  const db = await openDB();
  return db.all("SELECT * FROM products");
}
```

- `openDB()` otvara SQLite bazu  
- `db.all()` vraća više redova (array)

---

### ✔️ createProduct()

```js
export async function createProduct(product) {
  const db = await openDB();
  const { name, description, image, brand, sku, price, slug } = product;

  return db.run(
    `INSERT INTO products (name, description, image, brand, sku, price, slug)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [name, description, image, brand, sku, price, slug]
  );
}
```

- `db.run()` izvršava INSERT  
- `?` placeholders štite od SQL injection  
- vrijednosti dolaze iz `req.body`

---

# 🎯 **5. Ukratko — veza između controller i queries**

| Sloj | Uloga |
|------|--------|
| **Controller** | prima request, poziva SQL funkciju, vraća JSON |
| **Queries** | izvršava SQL nad SQLite bazom |
| **Import** | povezuje controller i queries |

### Najkraće moguće:

**Controller = logika**  
**Queries = SQL**  
**Import = most između njih**

* */