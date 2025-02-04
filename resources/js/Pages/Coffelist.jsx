

import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Image1 from "./photos/hero-1.jpg";
import Image2 from "./photos/hero-2.png";
import Image3 from "./photos/hero-3.png";
import Image4 from "./photos/hero-4.png";
import Image5 from "./photos/hero-5.png";
import Image6 from "./photos/hero-6.png";
import Image7 from "./photos/hero-7.png";
import Image8 from "./photos/hero-8.png";
import Image9 from "./photos/hero-9.png";
import Image10 from "./photos/hero-10.png";
import Image11 from "./photos/hero-11.png";
import Image12 from "./photos/hero-12.png";
import Image13 from "./photos/hero-13.png";
import Image14 from "./photos/hero-14.png";
import Image15 from "./photos/hero-15.png";
import Image16 from "./photos/hero-16.png";
import Image17 from "./photos/hero-17.png";
import Image18 from "./photos/hero-18.png";
import Image19 from "./photos/hero-19.png";
import Image20 from "./photos/hero-20.png";
import Image21 from "./photos/hero-21.png";
import Image23 from "./photos/hero-23.png";
import Image24 from "./photos/hero-24.png";



const FoodData = [
  { id: 1, image: Image1, rating: "⭐⭐⭐⭐⭐", price: 10.99, name: "Food Name 1", desc: "Delicious coffee with a smooth blend." },
  { id: 2, image: Image2, rating: "⭐⭐⭐⭐⭐", price: 12.99, name: "Food Name 2", desc: "Rich espresso with a creamy texture." },
  { id: 3, image: Image3, rating: "⭐⭐⭐⭐⭐", price: 9.99, name: "Food Name 3", desc: "Aromatic coffee with a hint of vanilla." },
  { id: 4, image: Image4, rating: "⭐⭐⭐⭐⭐", price: 14.99, name: "Food Name 4", desc: "A special dark roast blend." },
  { id: 5, image: Image5, rating: "⭐⭐⭐⭐⭐", price: 11.99, name: "Food Name 5", desc: "Refreshing iced coffee with caramel." },
  { id: 6, image: Image6, rating: "⭐⭐⭐⭐⭐", price: 8.99, name: "Food Name 6", desc: "Classic black coffee with no sugar." },
  { id: 7, image: Image7, rating: "⭐⭐⭐⭐⭐", price: 13.99, name: "Food Name 7", desc: "Espresso with a touch of hazelnut." },
  { id: 8, image: Image8, rating: "⭐⭐⭐⭐⭐", price: 10.99, name: "Food Name 8", desc: "Delicious coffee with a smooth blend." },
  { id: 9, image: Image9, rating: "⭐⭐⭐⭐⭐", price: 12.99, name: "Food Name 9", desc: "Rich espresso with a creamy texture." },
  { id: 10, image: Image10, rating: "⭐⭐⭐⭐⭐", price: 9.99, name: "Food Name 10", desc: "Aromatic coffee with a hint of vanilla." },
  { id: 11, image: Image11, rating: "⭐⭐⭐⭐⭐", price: 14.99, name: "Food Name 11", desc: "A special dark roast blend." },
  { id: 12, image: Image12, rating: "⭐⭐⭐⭐⭐", price: 11.99, name: "Food Name 12", desc: "Refreshing iced coffee with caramel." },
  { id: 13, image: Image13, rating: "⭐⭐⭐⭐⭐", price: 8.99, name: "Food Name 13", desc: "Classic black coffee with no sugar." },
  { id: 14, image: Image14, rating: "⭐⭐⭐⭐⭐", price: 13.99, name: "Food Name 14", desc: "Espresso with a touch of hazelnut." },
  { id: 15, image: Image15, rating: "⭐⭐⭐⭐⭐", price: 10.99, name: "Food Name 15", desc: "Delicious coffee with a smooth blend." },
  { id: 16, image: Image16, rating: "⭐⭐⭐⭐⭐", price: 12.99, name: "Food Name 16", desc: "Rich espresso with a creamy texture." },
  { id: 17, image: Image17, rating: "⭐⭐⭐⭐⭐", price: 9.99, name: "Food Name 17", desc: "Aromatic coffee with a hint of vanilla." },
  { id: 18, image: Image18, rating: "⭐⭐⭐⭐⭐", price: 14.99, name: "Food Name 18", desc: "A special dark roast blend." },
  { id: 19, image: Image19, rating: "⭐⭐⭐⭐⭐", price: 11.99, name: "Food Name 19", desc: "Refreshing iced coffee with caramel." },
  { id: 20, image: Image20, rating: "⭐⭐⭐⭐⭐", price: 8.99, name: "Food Name 20", desc: "Classic black coffee with no sugar." },
  { id: 21, image: Image21, rating: "⭐⭐⭐⭐⭐", price: 8.99, name: "Food Name 20", desc: "Classic black coffee with no sugar." },
  { id: 22, image: Image23, rating: "⭐⭐⭐⭐⭐", price: 13.99, name: "Food Name 23", desc: "Espresso with a touch of hazelnut." },
  { id: 23, image: Image24, rating: "⭐⭐⭐⭐⭐", price: 13.99, name: "Food Name 23", desc: "Espresso with a touch of hazelnut." },

];




const Coffelist = () => {
  const [quantities, setQuantities] = useState(
    FoodData.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const handleQuantityChange = (id, value) => {
    const newValue = Math.max(1, parseInt(value) || 1);
    setQuantities({ ...quantities, [id]: newValue });
  };

  const handleAddToCart = (productId, e) => {
    e.stopPropagation(); // Prevent navigation when clicking "Add to Cart"
    const quantity = quantities[productId];

    Inertia.post(`/cart/add/${productId}`, { quantity }, {
      onSuccess: () => toast.success("✅ Product added to cart!", { position: "top-right", autoClose: 2000 }),
      onError: () => toast.error("❌ Failed to add product!", { position: "top-right", autoClose: 2000 }),
    });
  };

  return (
    <div className="container py-14 bg-gradient-to-t from-amber-100 to-amber-200">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-amber-800">Top List</h1>
        <p className="text-gray-600">Our best-selling coffee selection</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {FoodData.map((item) => (
          <Link key={item.id} href={`/product/${item.id}`} className="block">
            <div className="bg-white p-4 rounded-2xl border shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 flex flex-col items-center cursor-pointer">
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 object-cover rounded-lg border border-gray-100 mb-3"
              />
              <div className="text-center flex-grow">
                <p className="text-yellow-500">{item.rating}</p>
                <h2 className="text-md font-semibold text-amber-800">{item.name}</h2>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                <p className="text-md font-semibold mt-2 text-amber-700">${item.price}</p>
              </div>

              {/* Quantity & Add to Cart (Prevent Clicking Navigation) */}
              <div className="flex items-center space-x-2 mt-2">
                <label className="text-sm font-medium text-gray-700">Qty:</label>
                <input
                  type="number"
                  min="1"
                  value={quantities[item.id]}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  onClick={(e) => e.stopPropagation()} // Prevent click from navigating
                  className="w-12 text-center border border-gray-300 rounded-md p-1"
                />
              </div>

              <button
                onClick={(e) => handleAddToCart(item.id, e)}
                className="mt-3 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 hover:scale-105 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>

      <ToastContainer />
      <br />
      <Footer />
    </div>
  );
};

export default Coffelist;
