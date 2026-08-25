"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product, showActions = true }) {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <Link href={`/product/${product.id}`} className="block">
          <img src={product.image} alt={product.name} loading="lazy" />
        </Link>

        {showActions && (
          <button
            type="button"
            className={`heart ${liked ? "liked" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setLiked(!liked);
            }}
            aria-label={`Like ${product.name}`}
          >
            {liked ? "♥" : "♡"}
          </button>
        )}

        {showActions && product.inStock && (
          <button
            type="button"
            className={`quick-add ${added ? "added" : ""}`}
            onClick={handleAddToCart}
          >
            {added ? "✓ Added" : "Add to Cart"}
          </button>
        )}
      </div>

      <div className="product-info">
        <Link href={`/product/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <p>{product.priceFormatted}</p>
        {!product.inStock && (
          <span className="out-of-stock-badge">Out of Stock</span>
        )}
      </div>
    </div>
  );
}
