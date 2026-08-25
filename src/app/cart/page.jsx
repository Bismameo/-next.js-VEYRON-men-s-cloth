"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function CartPage() {
  const { cart, updateQuantity, removeItem, totalItems, totalPrice, clearCart } =
    useCart();
  const { isAuthenticated } = useAuth();
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const shippingCost = totalPrice > 150 ? 0 : 12.99;
  const finalTotal = totalPrice + shippingCost;

  const handleCheckout = () => {
    if (!isAuthenticated) {
      setCheckoutMessage("Please login to continue with checkout.");
      return;
    }
    setCheckoutMessage("Order placed successfully! Thank you for shopping with Veyron.");
    setTimeout(() => {
      clearCart();
      setCheckoutMessage("");
    }, 3000);
  };

  if (cart.length === 0) {
    return (
      <section className="container py-16">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
        </div>
        <div className="cart-empty">
          <div className="emoji">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Discover our collection and add items to get started.</p>
          <Link href="/product" className="black-btn mt-6 inline-block">
            CONTINUE SHOPPING <span>→</span>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-12">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <span className="text-sm text-[#8a8a8a]">
          {totalItems} {totalItems === 1 ? "item" : "items"}
        </span>
      </div>

      <div className="cart-table-wrap">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="cart-product">
                    <img src={item.image} alt={item.name} />
                    <div className="cart-product-info">
                      <span className="name">{item.name}</span>
                      {item.selectedColor && (
                        <span className="variant">Color: {item.selectedColor}</span>
                      )}
                      {item.selectedSize && (
                        <span className="variant">Size: {item.selectedSize}</span>
                      )}
                    </div>
                  </div>
                </td>
                <td>{item.priceFormatted}</td>
                <td>
                  <div className="cart-qty">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td>
                  <button
                    type="button"
                    className="cart-remove"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span>
            {shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}
          </span>
        </div>
        {shippingCost > 0 && (
          <p className="text-xs text-[#8a8a8a] mt-2">
            Add ${(150 - totalPrice).toFixed(2)} more for free shipping
          </p>
        )}
        <div className="summary-row total">
          <span>Total</span>
          <span>${finalTotal.toFixed(2)}</span>
        </div>

        {checkoutMessage && (
          <div className={`checkout-message ${isAuthenticated ? "success" : "info"}`}>
            {checkoutMessage}
            {!isAuthenticated && (
              <Link href="/login" className="underline ml-2">
                Login here
              </Link>
            )}
          </div>
        )}

        <button className="cart-checkout" onClick={handleCheckout}>
          {isAuthenticated ? "PROCEED TO CHECKOUT" : "LOGIN TO CHECKOUT"}
        </button>

        <Link
          href="/product"
          className="text-center block mt-4 text-sm text-[#8a8a8a] underline"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}
