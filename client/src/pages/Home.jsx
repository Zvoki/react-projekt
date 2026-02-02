/**prikazati 8 popularnih proizvoda 
svaki vodi na detaljnu stranicu 
klik na srce ne radi ništa 
 */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Fetch popular products from the server
        fetch("http://localhost:3001/products/popular")
            //pokazuje tijelo odgovora kao JSON
            .then(res => res.json())
            //fetch + res.json() dohvaća i parsira JSON; setProducts ažurira stanje i pokreće render. 
            //poziva React-ovu funkciju za ažuriranje stanja; products
            //  postaje niz podataka i komponenta se re-renderuje da
            //  prikaže listu. Važno: setProducts je asinhrono u smislu React lifecyclea — ažuriranje stanja ne mijenja odmah products u istom 
            // ticku, ali će uzrokovati sljedeći render s novim vrijednostima.
            .then(data => setProducts(data));
    }, []);// useEffect s praznim nizom izvršava se jednom nakon mounta.

    return (
        <div>
            <h2>Populera Produkter</h2>
            <div className="grid">
                {products.map(p => (
                <Link key={p.di} to={`/products/${p.slug}`} className="card">
                    <img src={p.image} alt={p.name} />
                    <h3>{p.name}</h3>
                    <p>{p.price} SEK</p>
                </Link>

            ))}
            </div>
        </div>
    );
}