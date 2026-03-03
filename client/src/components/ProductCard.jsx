/**
 * 
Fajl	Uloga	Lokacija	Logika
Product.jsx	Stranica/ruta	pages/	Fetch + držanje stanja + prikaz detalja
ProductCard.jsx	Stilska kartica	components/	Prikaz (slika, naziv, cena) + link ka stranici
Dakle: Product je “gde su podaci” i “kako se dobijaju”, dok je ProductCard “kako sam proizvod izgleda kad ga prikažeš”.
 * Ovo ti treba na tri mjesta:
Home (popularni proizvodi) 
Search rezultati 
Slični proizvodi na detaljnoj stranici 
 */
// src/components/ProductCard.jsx
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
/*Link iz react‑router-dom zamenjuje standardni <a> –
 omogućava navigaciju unutar SPA bez osvežavanja stranice.

formatPrice je pomoćna funkcija koja formatira broj u 
lep oblik sa zarezima i valutom.*/

/*ProductCard je funkcionalna komponenta koja prima prop
 product – objekat sa podacima o proizvodu.*/
export default function ProductCard({ product }) {
    return (
        <Link to={`/products/${product.slug}` } className="product-card">
           <div className="image-wrapper">
          <img src={product.image_url} alt={product.namn} className="responsive product-image" />
           <img src="/images/suit-heart-fill.svg" alt="Favorite" className="heart-icon" />
           </div> 
          <div className="info">
            <h3>{product.namn}</h3>
            <p>{typeof product.price === 'string' ? product.price : formatPrice(product.price)}</p>
            </div>  
        </Link>
    )
}
/*Ceo karton je umotan u <Link> koji vodi na rutu
 /products/<slug> (slug se generiše iz imena ili nekog 
 identifikatora proizvoda).*/
 /*
 image-wrapper sadrži glavnu sliku proizvoda (product.image_url).
alt atribut koristi product.namn (naziv) radi pristupačnosti.* */

/**info blok prikazuje naziv (<h3>) i cenu (<p>).
Za cenu postoji mali ternary:
Ako je product.price već string, koristi se direktno.
Inače se poziva formatPrice da bi se broj pretvorio u ispravan format (npr. 1 234,00 KN).
 * 
Fajl	Uloga	Lokacija	Logika
Product.jsx	Stranica/ruta	pages/	Fetch + držanje stanja + prikaz detalja
ProductCard.jsx	Stilska kartica	components/	Prikaz (slika, naziv, cena) + link ka stranici
Dakle: Product je “gde su podaci” i “kako se dobijaju”, dok je ProductCard “kako sam proizvod izgleda kad ga prikažeš”.
 */