/**
 * Ovo ti treba na tri mjesta:
Home (popularni proizvodi) 
Search rezultati 
Slični proizvodi na detaljnoj stranici 
 */
// src/components/ProductCard.jsx
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

export default function ProductCard({ product }) {
    return (
        <Link to={`/products/${product.slug}` } className="product-card">
          <img src={product.image} alt={product.name} />
          <div className="info">
            <h3>{product.name}</h3>
            <p>{formatPrice(product.price)}</p>
            </div>  
        </Link>
    )
}
