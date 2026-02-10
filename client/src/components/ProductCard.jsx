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
           <div className="image-wrapper">
          <img src={product.image_url} alt={product.namn} className="responsive product-image" />
           <img src="/images/suit-heart-fill.svg" alt="Favorite" className="heart-icon" />
           </div> 
          <div className="info">
            <h3>{product.namn}</h3>
            <p>{formatPrice(product.price)}</p>
            </div>  
        </Link>
    )
}
