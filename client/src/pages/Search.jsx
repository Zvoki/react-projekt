/**reads query string ?q=t-shirt
displays the number of products found
displays the list of products
 */

import { useEffect, useState } from "react";

import { useSearchParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
const API = import.meta.env.VITE_API_URL;

export default function Search () {
    const [params] = useSearchParams ();
    const q = params.get("q") || "";
    const [results, setResults] = useState([]);

    useEffect  (() => {
        fetch(`${API}/search?q=${encodeURIComponent(q)}`)
        .then(res => res.json())
        .then(data => setResults(data));
    }, [q]);
  
    return (
        <div>
            <h2>Hittade { results.length } produkter</h2>
            
      <div className="grid">
        {results.map(p => (
           <ProductCard key={p.id} product={p} />
        ))}
      </div>
      
        </div>
    )   
}
  