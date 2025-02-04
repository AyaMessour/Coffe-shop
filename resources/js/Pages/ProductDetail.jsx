import React from "react";
import { Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia"; // Import Inertia for POST requests
import { toast } from "react-toastify"; // Import toast for notifications

const handleAddToCart = (productId, e) => {
  e.stopPropagation(); // Prevent navigation when clicking "Add to Cart"
  const quantity = 1; // Default quantity set to 1 if no state is provided

  // Send a POST request to add the product to the cart
  Inertia.post(`/cart/add/${productId}`, { quantity }, {
    onSuccess: () => {
      toast.success("✅ Product added to cart!", { position: "top-right", autoClose: 2000 });
    },
    onError: () => {
      toast.error("❌ Failed to add product!", { position: "top-right", autoClose: 2000 });
    }
  });
};

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
            <li><Link href="/cart" className="hover:text-amber-300">Cart</Link></li>
            <li><Link href="/contact" className="hover:text-amber-300">Contact</Link></li>
            <li><Link href="/orders" className="hover:text-amber-300">Orders</Link></li>
          </ul>
        </div>
      </nav>

      {/* Product Details */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
        <h1 className="text-4xl font-bold text-amber-900 mb-4">{product.name}</h1>
        <img 
          src={`/storage/products/hero-${product.id}.png`} 
          alt={product.name} 
          className="w-64 h-64 object-cover rounded-lg mb-4" 
        />
        <p className="text-gray-700 text-lg">{product.description}</p>
        <p className="font-bold text-amber-700 text-2xl mt-4">{product.price} USD</p>

        {/* Add to Cart Button */}
        <button
          onClick={(e) => handleAddToCart(product.id, e)}  
          className="mt-3 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 hover:scale-105 transition duration-300"
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
