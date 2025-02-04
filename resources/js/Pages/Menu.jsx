import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia"; 
import Footer from "./Footer";

const Menu = ({ products = [] }) => { // ✅ Default to empty array
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  // ✅ Ensure filtering won't break
  const filteredProducts = products.length > 0 
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) &&
          (filterCategory ? product.category === filterCategory : true)
      )
    : [];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-700 via-amber-200 to-amber-600">
      {/* Navbar */}
      <nav className="bg-amber-800 text-white p-4 fixed w-full top-0 left-0 z-10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Lily's Coffee</h1>
          <ul className="flex space-x-6 text-lg">
            <li><Link href="/" className="hover:text-amber-300">Home</Link></li>
            <li><Link href="/cart" className="hover:text-amber-300">Cart</Link></li>
            <li><Link href="/About" className="hover:text-amber-300">About</Link></li>
            <li><Link href="/Contact" className="hover:text-amber-300">Contact</Link></li>
            <li><Link href="/orders" className="hover:text-amber-300">Orders</Link></li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container mx-auto p-6 mt-20">
        <h1 className="text-3xl font-bold text-center mb-6">Our Menu</h1>

        {/* Search & Filter */}
        <div className="flex justify-center space-x-4 mb-6">
          <input
            type="text"
            placeholder="Search for coffee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border rounded-md"
          />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="">All Categories</option>
            <option value="Coffee">Coffee</option>
            <option value="Tea">Tea</option>
            <option value="Tea">Drinks</option>
            <option value="Tea">Organic Coffe</option>
            <option value="Pastries">Pastries</option>
          </select>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div key={item.id} className="p-4 border rounded-lg shadow-md bg-white">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
                <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-amber-600 font-bold mt-1">${item.price}</p>
                <button
                  onClick={() => Inertia.post(`/cart/add/${item.id}`)}
                  className="mt-2 bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700"
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-700">No products found.</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Menu;
