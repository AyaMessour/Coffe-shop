import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
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

  const handleAddToCart = (productId) => {
    const quantity = quantities[productId];
    console.log(`Adding product ${productId} with quantity ${quantity}`); // Debugging
    Inertia.post(`/cart/add/${productId}`, { quantity }, {
      onSuccess: () => alert("Product added to cart!"),
      onError: () => alert("Failed to add product to cart."),
    });
  };

  return (
    <div className="container py-14 bg-gradient-to-t from-amber-100 to-amber-200">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Top List</h1>
        <p>Our best-selling coffee selection</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {FoodData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 lg:p-6 rounded-3xl border shadow-md hover:shadow-lg flex flex-col items-center transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-64 h-64 object-cover rounded-full border border-gray-200 mb-4"
            />
            <div className="text-center flex-grow">
              <p className="text-red-500">{item.rating}</p>
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-600">{item.desc}</p>
              <p className="text-lg font-semibold mt-2">${item.price.toFixed(2)}</p>
            </div>

            <div className="flex items-center space-x-3 mt-2">
              <label className="text-sm font-medium">Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantities[item.id]}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                className="w-16 text-center border border-gray-300 rounded-md"
              />
            </div>

            <button
              onClick={() => handleAddToCart(item.id)}
              className="mt-4 bg-amber-600 text-white px-6 py-2 rounded-full hover:scale-105 transition duration-200"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Coffelist;
