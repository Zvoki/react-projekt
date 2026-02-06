/**prikazati 8 popularnih proizvoda 
svaki vodi na detaljnu stranicu 
klik na srce ne radi ništa 
 */
import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";

export default function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Fetch popular products from the server
        fetch("http://localhost:8000/products/popular")

            //pokazuje tijelo odgovora kao JSON
            .then(res => res.json())
            //fetch + res.json() dohvaća i parsira JSON; setProducts ažurira stanje i pokreće render. 
            //poziva React-ovu funkciju za ažuriranje stanja; products
            //  postaje niz podataka i komponenta se re-renderuje da
            //  prikaže listu. Važno: setProducts je asinhrono u smislu React lifecyclea — ažuriranje stanja ne mijenja odmah products u istom 
            // ticku, ali će uzrokovati sljedeći render s novim vrijednostima.
            .then(data => setProducts(data));
    }, []);

    // prikaži najviše 8 proizvoda
     const visible = products.slice(0, 8);
      return ( 
      <div>
         <Hero />
         <h2>Populera Produkter</h2>
          <div className="grid"> {visible.map(p => 
          ( <ProductCard key={p.id} product={p} /> ))} 
          </div> 
          </div> 
          ); }