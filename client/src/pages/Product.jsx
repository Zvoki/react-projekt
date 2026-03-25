
 //Product - Component for displaying details of a single product
 
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";


export default function Product() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
const API = import.meta.env.VITE_API_URL; 

  useEffect(() => {
    fetch(`${API}/products/${slug}`)

      .then(res => res.json())
      .then(data => setProduct(data));
  }, [slug]);

  if (!product) return <p>Laddar...</p>;

  return (

<div className="product-view">
  <div className="product-view__main">
    <div className="product-view__image-container">
      <img className="product-view__image" src={product.image_url} alt={product.namn} />
    </div>
    
    <div className="product-view__content">
      <h1 className="product-view__title">{product.namn}</h1>
      <p className="product-view__brand">Levis</p>
      <p className="product-view__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
      </p>
      <p className="product-view__price">{product.price} SEK</p>
      <button className="product-view__button">Lägg i varukorg</button>
    </div>
  </div>

  <h3 className="product-view__similar-title">Liknande produkter</h3>
  <div className="product-view__grid">
    {product.similar?.map(p => (
      <ProductCard key={p.id} product={p} />
    ))}
  </div>
</div>
  );
}
