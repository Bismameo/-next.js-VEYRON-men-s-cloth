"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const { totalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      {/* TOP BAR */}
      <div className="topbar">
        <div className="container topbar-content">
          Free shipping on orders over $150 | New season now live
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="second-nav" aria-label="Main navigation">
        <div className="container second-nav-container">
          {/* DESKTOP LINKS */}
          <div className="second-nav-links">
            <Link href="/">Home</Link>
            <Link href="/product">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* LOGO */}
          <Link href="/" className="second-nav-logo" onClick={closeMenu}>
            VEYRON
          </Link>

          {/* ACTIONS */}
          <div className="nav-actions">
            {/* CART */}
            <Link
              href="/cart"
              className="nav-icon-btn"
              aria-label="Shopping cart"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}
            </Link>

            {/* ACCOUNT */}
            {isAuthenticated ? (
              <div className="account-wrapper">
                <button
                  type="button"
                  className="nav-icon-btn"
                  aria-label="Account menu"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.25a4.5 4.5 0 019 0v.75a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75v-.75z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className="account-dropdown">
                  <div className="account-info">
                    <p className="account-name">{user?.name}</p>
                    <p className="account-email">{user?.email}</p>
                  </div>
                  <button
                    type="button"
                    onClick={logout}
                    className="logout-btn"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                className="nav-icon-btn"
                aria-label="Login"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.25a4.5 4.5 0 019 0v.75a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75v-.75z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            )}

            {/* MOBILE TOGGLE */}
            <button
              type="button"
              className={`nav-mobile-toggle ${menuOpen ? "active" : ""}`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-inner container">
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/product" onClick={closeMenu}>
            Shop
          </Link>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
          {isAuthenticated ? (
            <button
              type="button"
              onClick={() => {
                logout();
                closeMenu();
              }}
              style={{
                textAlign: "left",
                padding: "1rem 0",
                color: "#000",
                borderBottom: "1px solid var(--border-color)",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                width: "100%",
                cursor: "pointer",
              }}
            >
              Logout ({user?.name})
            </button>
          ) : (
            <Link href="/login" onClick={closeMenu}>
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
