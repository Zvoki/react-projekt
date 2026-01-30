//Ovdje pisemo kod za upite prema bazi podataka
// server/db/queries.js
import { openDB } from "./openDB.js";
// 1. Popularni proizvodi (8 kom)
export function getPopularProducts() {
  const db = openDB();
  return db.prepare("SELECT * FROM products LIMIT 8").all();
}
// 2. Proizvod po slug-u
export function getProductBySlug(slug) {
  const db = openDB();
  return db.prepare("SELECT * FROM products WHERE slug = ?").get(slug);
}
// 3. Pretraga proizvoda
export function searchProducts(term) {
  const db = openDB();
  return db.prepare("SELECT * FROM products WHERE name LIKE ?").all(`%${term}%`);
}
// 4. Admin — lista svih proizvoda
export function getAllProducts() {
  const db = openDB();
  return db.prepare("SELECT * FROM products").all();
}
// 5. Admin — dodavanje proizvoda
export function createProduct(product) {
  const db = openDB();
  const { name, description, image, brand, sku, price, slug } = product;
  return db.prepare(
    `INSERT INTO products (name, description, image, brand, sku, price, slug)
     VALUES (?, ?, ?, ?, ?, ?, ?)`
  ).run(name, description, image, brand, sku, price, slug);
}
