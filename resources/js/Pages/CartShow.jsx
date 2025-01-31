import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import Footer from "./Footer";

export default function CartShow({ cart }) {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleRemove = (id) => {
    Inertia.post(`/cart/remove/${id}`);
  };

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountedPrice = totalPrice - discount;

  // Apply promo code logic
  const applyPromo = () => {
    if (promoCode === "COFFEE10") {
      setDiscount(totalPrice * 0.1); // 10% discount
    } else {
      setDiscount(0);
      alert("Invalid promo code!");
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-amber-700 via-amber-500 to-amber-100">
      {/* Navbar */}
      <nav className="bg-amber-800 text-white p-4 fixed w-full top-0 left-0 z-10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Lily's Coffee</h1>
          <ul className="flex space-x-6 text-lg">
            <li><Link href="/Home" className="hover:text-amber-300">Home</Link></li>
            <li><Link href="/About" className="hover:text-amber-300">About</Link></li>
            <li><Link href="/contact" className="hover:text-amber-300">Contact</Link></li>
            <li><Link href="/orders" className="hover:text-amber-300">Orders</Link></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center mt-20">
        <h1 className="text-4xl font-bold text-amber-900 mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-700 text-lg">Your cart is empty.</p>
        ) : (
          <div className="bg-amber-100 p-6 rounded-lg shadow-md w-full max-w-2xl">
            {cart.map((item) => (
              <div key={item.id} className="p-4 border-b border-amber-300 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold text-amber-800">{item.product.name}</h2>
                  <p className="text-gray-700">Quantity: {item.quantity}</p>
                  <p className="font-semibold text-amber-600">{item.product.price} USD</p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total and Promo Section */}
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold text-amber-800">
                Total: <span className="text-amber-700">{discountedPrice.toFixed(2)} USD</span>
              </p>

              <div className="mt-4 flex flex-col items-center">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="px-4 py-2 border border-amber-300 rounded-lg text-center focus:ring-2 focus:ring-amber-500"
                />
                <button
                  onClick={applyPromo}
                  className="mt-2 bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition duration-200"
                >
                  Apply Promo
                </button>
              </div>
            </div>
          </div>
        )}

        <br />
        <Link href="/Home" className="text-amber-900 hover:underline">← Back to Home</Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
