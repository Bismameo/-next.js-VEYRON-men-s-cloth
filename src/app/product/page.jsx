"use client";

import Link from "next/link";
import ProductCard from "../Components/ProductCard";
import { products, categories } from "../data/products";
import { useState } from "react";

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="product-page container py-12">
      <div className="product-header">
        <h1>SHOP ALL</h1>
        <div className="product-filters">
          <button
            type="button"
            className={`filter-btn ${selectedCategory === "ALL" ? "active" : ""}`}
            onClick={() => setSelectedCategory("ALL")}
          >
            ALL
          </button>
          {categories.map((cat) => (
            <button
              key={cat.title}
              type="button"
              className={`filter-btn ${selectedCategory === cat.title ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.title)}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-[#8a8a8a]">No products found in this category.</p>
          <button
            type="button"
            className="black-btn mt-6"
            onClick={() => setSelectedCategory("ALL")}
          >
            VIEW ALL PRODUCTS
          </button>
        </div>
      )}
    </section>
  );
}
