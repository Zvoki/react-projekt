/**prikazati detalje proizvoda 
prikazati 3 slična proizvoda 
dugme “Lägg i varukorg” ne radi ništa 
 */
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";



export default function Product() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/products/${slug}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [slug]);

  if (!product) return <p>Laddar...</p>;

  return (
    <div>
      <h1>{product.name}</h1>

      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} SEK</p>

      <button>Lägg i varukorg</button>

      <h3>Liknande produkter</h3>

      <div className="grid">
        {product.similar?.map(p => (
          <Link key={p.id} to={`/products/${p.slug}`} className="card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price} SEK</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

/*
*Kratko: Ovaj komponent učitava detalje jednog proizvoda iz backend-a koristeći slug iz URL‑a, sprema odgovor u stanje i prikazuje podatke te 
listu sličnih proizvoda; efekat za dohvat se ponovo pokreće svaki put kad se slug promijeni.

Pregled
Šta radi komponent: dohvaća /products/:slug s tvog servera, čuva rezultat u product stanju i renderuje stranicu proizvoda.

Gdje se koristi: obično na ruti poput /products/:slug u react-router-dom.

Uvozi i parametri
useEffect, useState — React hookovi za stanje i side‑efekte.

useParams — čita dinamički dio rute (slug) iz URL‑a.

Link — pravi navigacijske linkove bez reloada.

Red po red — objašnjenje
const { slug } = useParams();  
Uzimamo slug iz URL‑a (npr. telefon-xyz) i koristimo ga za poziv API‑ja.

const [product, setProduct] = useState(null);  
Inicijalno nema podataka; null znači da još čekamo odgovor.

useEffect(() => { fetch(...).then(...).then(...) }, [slug]);

Efekat se pokreće nakon prvog rendera i svaki put kad slug promijeni vrijednost. To znači da će komponent dohvatiti nove podatke kad korisnik klikne na drugi proizvod. 

fetch(\http://localhost:3001/products/${slug}\) šalje GET zahtjev serveru; res.json() parsira JSON; setProduct(data) sprema podatke u stanje. Ovo je standardan pattern za dohvat podataka u Reactu. 
 * 
 */