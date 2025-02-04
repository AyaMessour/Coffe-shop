import React from "react";
import { Link } from "@inertiajs/react";

export default function ProductDetail({ product }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-700 via-amber-500 to-amber-100 p-6">
      {/* Navbar */}
      <nav className="bg-amber-800 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Lily's Coffee</h1>
          <ul className="flex space-x-6 text-lg">
            <li><Link href="/" className="hover:text-amber-300">Home</Link></li>
            <li><Link href="/About" className="hover:text-amber-300">About</Link></li>
            <li><Link href="/contact" className="hover:text-amber-300">Contact</Link></li>
            <li><Link href="/orders" className="hover:text-amber-300">Orders</Link></li>
          </ul>
        </div>
      </nav>

      {/* Product Details */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
        <h1 className="text-4xl font-bold text-amber-900 mb-4">{product.name}</h1>
 <img src={product.image_url} alt={product.name}
 className="w-full h-64 object-cover rounded-lg mb-4" />
        <p className="text-gray-700 text-lg">{product.description}</p>
        <p className="font-bold text-amber-700 text-2xl mt-4">{product.price} USD</p>

        {/* Add to Cart Button */}
        <button 
          onClick={() => Inertia.post(`/cart/add/${product.id}`)}
          className="mt-4 bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition duration-200"
        >
          Add to Cart
        </button>

        <div className="mt-6">
          <Link href="/Home" className="text-amber-900 hover:underline">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
