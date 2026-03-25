/**display 8 popular products
each leads to a detailed page 
 */
import { useEffect, useState } from "react";
import Spots from "../components/Spots";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
const API = import.meta.env.VITE_API_URL;

export default function Home() {
    const [products, setProducts] = useState([]);
   
    useEffect(() => {  
        // Fetch popular products from the server
        fetch(`${API}/products/popular`)

            
            .then(res => res.json())
            
            .then(data => {
                console.log("Produkter lästa:", data);
                setProducts(data);
            })
            .catch(err => console.error("Fel när produkter skulle läsas:", err));
    }, []);

    
    const visible = products.slice(0, 8);
    return (
        <div>
            <Hero />
            <Spots />  {}
            <div className="grid"> {visible.map(p =>
                (<ProductCard key={p.id} product={p} />))}
            </div>
        </div>
    );
} 
