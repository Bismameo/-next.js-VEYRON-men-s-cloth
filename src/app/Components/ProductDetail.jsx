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

const thumbs = [
  "?auto=format&fit=crop&w=1200&q=90",
  "?auto=format&fit=crop&w=1200&q=60",
  "?auto=format&fit=crop&w=1200&q=40",
  "?auto=format&fit=crop&w=1200&q=80",
];

export default function ProductDetail({ product }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [addedToCart, setAddedToCart] = useState(false);

  const baseImg = product.image.split("?")[0];

  const handleAddToCart = () => {
    addItem(
      { ...product, selectedColor, selectedSize },
      quantity
    );
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
      {/* LEFT: Image Gallery */}
      <div className="detail-gallery">
        <div className="detail-image">
          <img
            src={`${baseImg}${thumbs[activeThumb]}`}
            alt={`${product.name} - view ${activeThumb + 1}`}
          />
        </div>
        <div className="detail-thumbs">
          {thumbs.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`thumb ${i === activeThumb ? "active" : ""}`}
              onClick={() => setActiveThumb(i)}
            >
              <img
                src={`${baseImg}${thumbs[i]}`}
                alt={`Thumbnail ${i + 1}`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT: Product Info */}
      <div className="detail-content">
        <Link href="/product" className="detail-back">
          ← Back to shop
        </Link>

        <h1>{product.name}</h1>

        <div className="detail-rating">
          <span className="stars">
            {"★".repeat(Math.round(product.rating))}
            {"☆".repeat(5 - Math.round(product.rating))}
          </span>
          <span>({product.rating.toFixed(1)} / 5)</span>
        </div>

        <div className="detail-price">{product.priceFormatted}</div>

        <div className="detail-meta">
          <span>
            <span className="label">Category:</span> {product.category}
          </span>
          {product.sku && (
            <span>
              <span className="label">SKU:</span> {product.sku}
            </span>
          )}
          {product.origin && (
            <span>
              <span className="label">Origin:</span> {product.origin}
            </span>
          )}
          {product.weight && (
            <span>
              <span className="label">Weight:</span> {product.weight}
            </span>
          )}
          <span
            className={`detail-stock ${
              product.inStock ? "in-stock" : "out-of-stock"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Color selector */}
        <div className="detail-options">
          <label>Color: {selectedColor}</label>
          <div className="swatches">
            {product.colors.map((color) => (
              <button
                key={color}
                type="button"
                className={`swatch ${
                  selectedColor === color ? "selected" : ""
                }`}
                style={
                  colorMap[color]
                    ? {
                        background: colorMap[color],
                        color:
                          colorMap[color] === "#ffffff" ? "#333" : "#fff",
                        border:
                          colorMap[color] === "#ffffff"
                            ? "2px solid #ddd"
                            : undefined,
                      }
                    : {}
                }
                onClick={() => setSelectedColor(color)}
                aria-label={color}
                title={color}
              >
                {selectedColor === color ? "✓" : ""}
              </button>
            ))}
          </div>
        </div>

        {/* Size selector */}
        <div className="detail-options">
          <label>Size: {selectedSize}</label>
          <div className="swatches">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                className={`swatch ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="text-xs text-[#8a8a8a] underline mt-1"
          >
            SIZE GUIDE
          </button>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="detail-actions">
          <div className="qty-input">
            <button
              type="button"
              onClick={() => handleQty(-1)}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span>{quantity}</span>
            <button
              type="button"
              onClick={() => handleQty(1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <button
            type="button"
            className={`add-to-cart ${
              !product.inStock ? "out-of-stock" : ""
            } ${addedToCart ? "added" : ""}`}
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            {addedToCart
              ? "✓ ADDED TO CART"
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
          <button
            type="button"
            className="buy-now-btn"
            onClick={handleBuyNow}
          >
            BUY NOW
          </button>
        )}

        {/* Description Tabs */}
        <div className="detail-tabs">
          <div className="tab-list">
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

          <div className="tab-content">
            {activeTab === "description" && (
              <p>{product.description}</p>
            )}
            {activeTab === "materials" && (
              <p>{product.materials || "Crafted from premium materials selected for durability and comfort."}</p>
            )}
            {activeTab === "fit" && (
              <p>{product.fit || "Model is 6'1\" / 185cm and wears size M. Regular fit. Size down for a slimmer silhouette."}</p>
            )}
            {activeTab === "care" && (
              <p>{product.care || "Follow care instructions on the garment label for best results."}</p>
            )}
            {activeTab === "shipping" && (
              <p>
                Free standard shipping on orders over $150. Express delivery
                available at checkout. All orders are tracked and insured.
              </p>
            )}
            {activeTab === "returns" && (
              <p>
                Easy 30-day returns. Items must be unworn with original tags
                attached. Refunds processed within 5-7 business days.
              </p>
            )}
            {activeTab === "reviews" && (
              <div className="reviews-summary">
                <div className="review-rating">
                  <span className="stars">
                    {"★".repeat(Math.round(product.rating))}
                    {"☆".repeat(5 - Math.round(product.rating))}
                  </span>
                  <span className="rating-value">
                    ({product.rating.toFixed(1)} / 5)
                  </span>
                </div>
                <p className="review-count">
                  {product.reviewCount > 0
                    ? `${product.reviewCount} customer reviews`
                    : "No reviews yet — be the first to review"}
                </p>
                {product.reviewCount === 0 && (
                  <p className="review-prompt">
                    Your feedback helps us maintain the quality and style you
                    expect from Veyron.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
