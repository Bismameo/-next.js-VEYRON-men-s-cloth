"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "../Components/ProductCard";
import { products, categories } from "../data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="home-page">
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            DEFINE
            <br />
            YOUR STYLE
          </h1>

          <div className="hero-line" />

          <p className="hero-description">
            Modern essentials designed for the confident man. Premium fabrics,
            timeless silhouettes, and impeccable craftsmanship.
          </p>

          <div className="hero-actions">
            <Link href="/product" className="black-btn">
              SHOP COLLECTION
              <span>→</span>
            </Link>
            <Link href="/about" className="hero-outline-btn">
              OUR STORY
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="categories">
        {categories.map((category) => (
          <Link
            href="/product"
            className="category-card"
            key={category.title}
          >
            <img src={category.image} alt={category.title} />
            <div className="category-overlay">
              <h3>{category.title}</h3>
              <span className="category-button">
                VIEW ALL <span>→</span>
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* ================= NEW ARRIVALS ================= */}
      <section className="new-arrivals">
        <div className="section-header">
          <h2>NEW ARRIVALS</h2>
          <Link href="/product" className="view-all">
            VIEW ALL <span>→</span>
          </Link>
        </div>

        <div className="products">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="slider-dots">
          <span className="active" />
          <span />
          <span />
        </div>
      </section>

      {/* ================= SIGNATURE COLLECTION ================= */}
      <section className="signature">
        <div className="signature-image">
          <img
            src="https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1200&q=90"
            alt="Veyron signature collection"
          />
        </div>

        <div className="signature-content">
          <p>FEATURED COLLECTION</p>
          <h2>
            THE SIGNATURE
            <br />
            COLLECTION
          </h2>
          <p className="signature-text">
            Timeless pieces.
            <br />
            Modern confidence.
          </p>
          <Link href="/product" className="beige-btn">
            EXPLORE COLLECTION
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features">
        <div className="feature">
          <div className="feature-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3>PREMIUM QUALITY</h3>
          <p>
            Finest fabrics for
            <br />
            long lasting comfort.
          </p>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992h4.992m14.988 0h4.992v4.992M2.985 9.348h4.992m-4.992 0v4.992m14.988-4.992v4.992"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3>EASY RETURNS</h3>
          <p>
            Hassle free returns
            <br />
            within 30 days.
          </p>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3>SECURE PAYMENT</h3>
          <p>
            100% secure payment
            <br />
            guaranteed.
          </p>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-6.75C21.375 9.504 20.871 9 20.25 9H16.5m-9 0h9.75M4.125 9H8.25m-9 0h9.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3>FAST DELIVERY</h3>
          <p>
            Quick delivery to
            <br />
            your doorstep.
          </p>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>JOIN THE VEYRON CLUB</h2>
          <p>
            Get updates about new collections, exclusive offers
            <br className="desktop-only" />
            and seasonal drops.
          </p>
        </div>

        <form className="subscribe" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            aria-label="Email address"
          />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </section>
    </main>
  );
}
