/**čita query string ?q=t-shirt 
prikazuje broj pronađenih proizvoda 
prikazuje listu proizvoda 
 * 
 */
//useEffect, useState — React hookovi: useState čuva lokalno 
// stanje (ovdje results), a useEffect radi „side effects“ 
// kao što je dohvat podataka. 
import { useEffect, useState } from "react";
//useSearchParams, Link iz react-router-dom — useSearchParams 
// čita query string iz URL‑a (npr. ?q=telefon), a Link pravi
//  navigacijske linkove bez reloada stranice.
import { useSearchParams, Link } from "react-router-dom";

//|| "" osigurava da q bude prazan string ako parametar ne
//  postoji (sprječava greške).
export default function Search () {
    const [params] = useSearchParams ();
    const q = params.get("q") || "";
    const [results, setResults] = useState([]);
//results je niz proizvoda koje ćeš prikazati.
//setResults mijenja to stanje i izaziva ponovno renderovanje
//  komponente.


    useEffect  (() => {
        fetch(`http://localhost:3001/search?q=${q}`)
        .then(res => res.json())
        .then(data => setResults(data));
    }, [q]);
    /**Šta radi: nakon prvog rendera i svaki put kad se q
 *  promijeni, React pokreće funkciju unutar useEffect i 
 * izvršava fetch. To znači: kad korisnik promijeni pretragu
 *  (ili URL), komponenta automatski dohvaća nove rezultate
 * fetch(...).then(res => res.json()) parsira odgovor servera
 *  kao JSON, a zatim setResults(data) sprema podatke u stanje.
 * [q] u drugom argumentu useEffect zove se dependency
 *  array — efekat se izvršava samo kad se bilo koja vrijednost u tom nizu promijeni.
 */

    /**Renderovanje liste
     * results.map(p => (...)) prolazi kroz niz i za svaki 
     * proizvod pravi Link kartu.
key={p.id} je obavezno za listu u Reactu da bi React efikasno
 pratio elemente.
to={/products/${p.slug}} vodi na stranicu proizvoda koristeći
 slug.
     */
    return (
        <div>
            <h2>Hittade { results.length } produkter</h2>
            
      <div className="grid">
        {results.map(p => (
          <Link key={p.id} to={`/products/${p.slug}`} className="card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price} SEK</p>
          </Link>
        ))}
      </div>
        </div>
    )   
}