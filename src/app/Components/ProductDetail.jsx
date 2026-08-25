"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

const colorMap = {
  White: "#ffffff",
  Black: "#000000",
  Navy: "#0a192f",
  Grey: "#8a8a8a",
  Olive: "#556837",
  Brown: "#8d6a4f",
  Beige: "#d4c19c",
  Camel: "#c19a6b",
  Charcoal: "#36454f",
  Forest: "#228b22",
  Indigo: "#4b0082",
  Natural: "#f0e6d2",
  "Light Blue": "#b0d9ff",
  Burgundy: "#800020",
};

export default function ProductDetail({ product }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addItem({ ...product, selectedColor, selectedSize }, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    addItem({ ...product, selectedColor, selectedSize }, quantity);
    router.push("/cart");
  };

  const handleQty = (delta) => {
    setQuantity((q) => Math.max(1, q + delta));
  };

  const tabs = [
    { id: "description", label: "Description" },
    { id: "materials", label: "Materials" },
    { id: "fit", label: "Size & Fit" },
    { id: "care", label: "Care" },
    { id: "shipping", label: "Shipping" },
    { id: "returns", label: "Returns" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <section className="detail-container">
      {/* Back Button - Mobile */}
      <div className="detail-back-mobile">
        <Link href="/product" className="detail-back">
          ← Back to shop
        </Link>
      </div>

      <div className="detail-grid">
        {/* LEFT: Product Image */}
        <div className="detail-image-section">
          <div className="detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="detail-image-dots">
            {[0, 1, 2].map((i) => (
              <span key={i} className={`dot ${i === 0 ? "active" : ""}`} />
            ))}
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="detail-info">
          {/* Back Button - Desktop */}
          <div className="detail-back-desktop">
            <Link href="/product" className="detail-back">
              ← Back to shop
            </Link>
          </div>

          <h1 className="detail-title">{product.name}</h1>

          <div className="detail-rating">
            <span className="stars">
              {"★".repeat(Math.round(product.rating))}
              {"☆".repeat(5 - Math.round(product.rating))}
            </span>
            <span className="rating-text">({product.rating.toFixed(1)} / 5)</span>
          </div>

          <div className="detail-price">{product.priceFormatted}</div>

          <div className="detail-meta">
            <span className="detail-category">
              <span className="meta-label">Category:</span> {product.category}
            </span>
            <span
              className={`detail-stock ${
                product.inStock ? "in-stock" : "out-of-stock"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Color selector */}
          <div className="detail-option-group">
            <label className="detail-option-label">
              Color: <span className="option-value">{selectedColor}</span>
            </label>
            <div className="color-swatches">
              {product.colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`color-swatch ${
                    selectedColor === color ? "selected" : ""
                  }`}
                  style={
                    colorMap[color]
                      ? {
                          background: colorMap[color],
                          borderColor:
                            colorMap[color] === "#ffffff" ? "#ccc" : undefined,
                        }
                      : {}
                  }
                  onClick={() => setSelectedColor(color)}
                  aria-label={color}
                  title={color}
                >
                  {selectedColor === color && (
                    <span
                      className="swatch-check"
                      style={{
                        color: colorMap[color] === "#ffffff" ? "#333" : "#fff",
                      }}
                    >
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Size selector */}
          <div className="detail-option-group">
            <label className="detail-option-label">
              Size: <span className="option-value">{selectedSize}</span>
            </label>
            <div className="size-swatches">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`size-swatch ${
                    selectedSize === size ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <button type="button" className="size-guide-link">
              SIZE GUIDE
            </button>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="detail-purchase-row">
            <div className="quantity-selector">
              <button
                type="button"
                className="qty-btn"
                onClick={() => handleQty(-1)}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="qty-value">{quantity}</span>
              <button
                type="button"
                className="qty-btn"
                onClick={() => handleQty(1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              type="button"
              className={`add-to-cart-btn ${
                !product.inStock ? "disabled" : ""
              } ${addedToCart ? "added" : ""}`}
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              {addedToCart
                ? "✓ ADDED"
                : product.inStock
                ? "ADD TO CART"
                : "OUT OF STOCK"}
            </button>

            <button
              type="button"
              className={`wishlist-btn ${liked ? "liked" : ""}`}
              onClick={() => setLiked(!liked)}
              aria-label="Toggle wishlist"
            >
              {liked ? "♥" : "♡"}
            </button>
          </div>

          {product.inStock && (
            <button type="button" className="buy-now-btn" onClick={handleBuyNow}>
              BUY NOW
            </button>
          )}

          {/* Product Tabs */}
          <div className="detail-tabs">
            <div className="tabs-header">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="tabs-content">
              {activeTab === "description" && <p>{product.description}</p>}
              {activeTab === "materials" && (
                <p>
                  Crafted from premium materials selected for durability and
                  comfort. Each piece undergoes rigorous quality inspection.
                </p>
              )}
              {activeTab === "fit" && (
                <p>
                  Model is 6&apos;1&quot; / 185cm and wears size M. Regular fit.
                  Size down for a slimmer silhouette.
                </p>
              )}
              {activeTab === "care" && (
                <p>Follow care instructions on the garment label.</p>
              )}
              {activeTab === "shipping" && (
                <p>
                  Free standard shipping on orders over $150. Express delivery
                  available at checkout.
                </p>
              )}
              {activeTab === "returns" && (
                <p>Easy 30-day returns with original tags attached.</p>
              )}
              {activeTab === "reviews" && (
                <div className="reviews-info">
                  <div className="review-stars">
                    <span className="stars">
                      {"★".repeat(Math.round(product.rating))}
                      {"☆".repeat(5 - Math.round(product.rating))}
                    </span>
                    <span>({product.rating.toFixed(1)} / 5)</span>
                  </div>
                  <p>Be the first to review this product.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
