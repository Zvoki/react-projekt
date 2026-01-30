// server/controllers/productsController.js
import { getPopularProducts, getProductBySlug } from "../db/queries.js"

export async function popular(req, res) {
    const products = await getPopularProducts();
    res.json(products);
    
}
export async function productDetails(req, res) {
    const product = await getProductBySlug(req.params.slug);
    res.json(product);
}

/**Kako funkcionise popular()
 * Poziva SQL funkciju getPopularProducts() iz queries.js
Čeka rezultat
Vraća JSON React aplikaciji
React → GET /products/popular
        ↓
routes/products.js → router.get("/popular", popular)
        ↓
controllers/productsController.js → popular()
        ↓
db/queries.js → getPopularProducts()
        ↓
SQLite → SELECT * FROM products LIMIT 8
        ↓
JSON → React
Šta vraća?
8 proizvoda za sekciju “Populära Produkter”. 
*/
/**Kako funkcioniše productDetails()
 * ta radi?
Uzima slug iz URL‑a
(npr. /products/svart-tshirt)

Poziva SQL funkciju getProductBySlug(slug)

Vraća jedan proizvod kao JSON
React → GET /products/svart-tshirt
        ↓
routes/products.js → router.get("/:slug", productDetails)
        ↓
controllers/productsController.js → productDetails()
        ↓
db/queries.js → getProductBySlug(slug)
        ↓
SQLite → SELECT * FROM products WHERE slug = ?
        ↓
JSON → React

U queries.js imaš:

export async function getPopularProducts() {
  const db = await openDB();
  return db.all("SELECT * FROM products LIMIT 8");
}

export async function getProductBySlug(slug) {
  const db = await openDB();
  return db.get("SELECT * FROM products WHERE slug = ?", [slug]);
}

Controller funkcija	SQL funkcija	Šta radi
popular()	getPopularProducts()	vraća 8 proizvoda
productDetails()	getProductBySlug(slug)	vraća 1 proizvod po slug‑u

Ukratko
Controller = logika koja povezuje rute i bazu

Queries = SQL funkcije koje direktno rade sa SQLite

popular() → vraća 8 proizvoda

productDetails() → vraća jedan proizvod po slug‑u

? u SQL = placeholder za sigurnu zamjenu vrijednosti
 */
