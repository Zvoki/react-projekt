//Ovdje pišemo sve SELECT i INSERT upite

//server/db/queries.js
import { openDB } from "./openDB.js";

// 1. Popularni proizvodi (8 kom)
export async function getPopuleraProducts()
{ 
const db = await openDB();
return db.all("SELECT * FROM products LIMIT 8")}

// 2. Proizvod po slug-u
export async function getPoductsBySlug(slag) {
    const db = await openDB();
    return db.get("SELECT * FROM products WHERE slug = ?", [slug]);
}

// 3. Pretraga proizvoda
export async function searchProducts(term) {
    const db = await openDB();
    return db.all("SELECT * FROM products WHERE name LIKE ?", [`%${term}%`]); 

}
// 4. Admin — lista svih proizvoda
export async function getAllProducts() {
const db = await openDB();
return db.all("SELECT * FROM all products"); 
}
// 5. Admin — dodavanje proizvoda
export async function createProduct(product) {
  const db = await openDB();
  const { name, description, image, brand, sku, price, slug } = product;

  return db.run(
    `INSERT INTO products (name, description, image, brand, sku, price, slug)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [name, description, image, brand, sku, price, slug]
  );
}