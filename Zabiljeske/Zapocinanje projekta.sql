Zapocinanje projekta
/*Za frontend u terminalu pise npm create vite@latest client
client. Ovdje bira React i JavaScript+SWC. Onda otvara Visual Studio 
komandom code .U terminalu pise cd client kako bi usao u katalog
 i pise komandu npm install. Da bi napravio katalog za backend za jedan korak iznad
  pise cd .. i onda kad je dosao tu pise mkdir server. Tu instalira
install package.json komandom npm init -y. Nakon toga instalira Express
komandom npm install express. Nakon toga instalira nodemon komandom
npm install nodemon. I onda ide u njega i umjesto "name": "index.js"
 pise "name": "server.js". I tu isto stavlja "scripts": {
    "dev" : "nodemon server". U server.js pise kod za backend ,
Stvara fajl server.js koji ce se koristiti da pokrene backend).
 Pokrece aplikaciju u terminalu npm run dev. Sada zarvara aplikaciju 
 sa komandom clear u terminalu da bi za backend instalirao 
npm install better-sqlite3

1.openDB() otvara SQLite bazu
2. db.all() vraća više redova
3. SQL upit određuje šta dobijaš iz baze
export async function getAllProducts() {
  const db = await openDB();
  return db.all("SELECT * FROM products");
}
Kako radi moj projekat
┌──────────────────────────────┐
│        React Frontend        │
│  (npr. /products/svart-tshirt)│
└───────────────┬──────────────┘
                │ HTTP GET
                ▼
┌────────────────────────────────┐
│        Express Route           │
│ routes/products.js             │
│ router.get("/:slug", ...)      │
└───────────────┬────────────────┘
                │ poziva funkciju
                ▼
┌────────────────────────────────┐
│     Controller Layer           │
│ productsController.js          │
│ productDetails(req, res)       │
│  └─ uzima req.params.slug      │
│  └─ poziva getProductBySlug()  │
└───────────────┬────────────────┘
                │ SQL logika
                ▼
┌────────────────────────────────┐
│         Queries Layer          │
│ db/queries.js                  │
│ getProductBySlug(slug)         │
│  └─ otvara bazu openDB()       │
│  └─ izvršava SQL sa ?          │
│     SELECT * FROM products     │
│     WHERE slug = ?             │
└───────────────┬────────────────┘
                │ čita podatke
                ▼
┌────────────────────────────────┐
│          SQLite Baza           │
│ freaky.db                      │
│ tabela: products               │
│  └─ vraća jedan red            │
└───────────────┬────────────────┘
                │ rezultat
                ▼
┌────────────────────────────────┐
│      Controller vraća JSON     │
│ res.json(product)              │
└───────────────┬────────────────┘
                │ HTTP Response
                ▼
┌────────────────────────────────┐
│        React dobija JSON       │
│  i prikazuje detalje proizvoda │
└────────────────────────────────┘

1.Moram prvo da napravim konekciju sa bazom podaaka i to je u openDB.js
2. Ovdje pišemo sve SELECT i INSERT upite koje PDF zahtijeva.
// server/db/queries.js

-- template react