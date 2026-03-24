/**prikazati 8 popularnih proizvoda 
svaki vodi na detaljnu stranicu 
klik na srce ne radi ništa 
 */
import { useEffect, useState } from "react";
import Spots from "../components/Spots";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
const API = import.meta.env.VITE_API_URL;

export default function Home() {
    const [products, setProducts] = useState([]);
   /* useEffect tu garantuje da se popularni proizvodi jednom učitaju sa servera i da se rezultat smesti u stanje
 pre nego što se lista prikaže*/
    useEffect(() => {  
        // Fetch popular products from the server
        fetch(`${API}/products/popular`)

            //pokazuje tijelo odgovora kao JSON
            .then(res => res.json())
            
            .then(data => {
                console.log("Produkter lästa:", data);
                setProducts(data);
            })
            .catch(err => console.error("Fel när produkter skulle läsas:", err));
    }, []);

    // prikaži najviše 8 proizvoda
    const visible = products.slice(0, 8);
    return (
        <div>
            <Hero />
            <Spots />  {/* Spots sekcija — vidljiva samo na desktopu */}
            <div className="grid"> {visible.map(p =>
                (<ProductCard key={p.id} product={p} />))}
            </div>
        </div>
    );
} 
/**
 * useState drži lokalni array proizvoda, a useEffect je tu zadužen za “side‑efekt” – dohvat podataka s backend‑a. 
 * Evo šta se dešava:
Inicijalno stanje
const [products, setProducts] = useState([]);
komponenta počinje sa praznim nizom.
useEffect(() => { … }, [])

prva argument je funkcija koja se izvršava nakon prvog rendera komponente.
drugi argument ([]) je lista zavisnosti – ovde je prazna, pa se efekat pokreće samo jednom, odmah po mountovanju.
unutar funkcije se fetch‑uje /products/popular, parsira JSON i poziva setProducts(data) da se stanje popuni.
sve to se događa izvan glavnog render‑tipa; React ne sme da izvrši IO u samom telu funkcije komponente.
Zašto je bitno?

bez useEffect bi se poziv ka serveru napravio svaki put kad se komponenta renderuje, što bi dovodilo do beskonačnog
 petljanja (fetch → setState → render → fetch …).
useEffect omogućava “strani posao” (network request) koji se odvija tek kad komponenta zaživi, a ne pri svakom 
rerenderu. nakon što setProducts ažurira stanje, React triggeruje novi render, i tada se proizvodi prikazuju 
u <ProductCard> elementima.
Znači: useEffect tu garantuje da se popularni proizvodi jednom učitaju sa servera i da se rezultat smesti u stanje
 pre nego što se lista prikaže. Bez njega bi imao ili previše zahteva, ili nema zahteva uopšte (ako bi poslao fetch 
 ručno iz tela komponente), ili biste morali da koristite neku drugu logiku za sinhronizaciju sa spoljnom API‑jem.

📝 Ukratko: useEffect je React‑ova “lifecycle” kapija gde ti stavljaš zahteve ka spoljnom svetu (network, DOM 
manipulacija, timere…), a prazna zavisnost ([]) znači “uradi ovo samo jednom kad komponenta prvi put stigne na ekran”.

prvi argument je funkcija – u ovom slučaju arrow‑funkcija:
() => {
    // ...network request i setProducts…
}
    to je callback koji React poziva nakon prvog rendera (a ponovo kad se promene zavisnosti, kad ih ima). Drugi
     argument ([]) je lista zavisnosti.
    Dakle: prvi argument useEffect‑a je taj blok koda unutar () => { … }.
 */