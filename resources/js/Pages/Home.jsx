import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import Coffelist from "./Coffelist"; // Import Coffelist component
import hero1 from "./photos/hero-1.jpg";
import hero2 from "./photos/hero-10.png";
import hero4 from "./photos/hero-7.png";

export default function Home() {
  const images = [hero1, hero2, hero4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
  

 <div className="h-screen flex flex-col bg-gradient-to-br from-amber-700 via-amber-200 to-amber-600">
      {/* Navbar */}
      <nav className="bg-amber-800 text-white p-4 fixed w-full top-0 left-0 z-10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold ">Lily's Coffee</h1>
          <ul className="flex space-x-6 text-lg">
            <li><Link href="/Home" className="hover:text-amber-300">Home</Link></li>
            <li><Link href="/cart" className="hover:text-white">Cart</Link></li>
            <li><Link href="/About" className="hover:text-amber-300">About</Link></li>
            <li><Link href="/contact" className="hover:text-amber-300">Contact</Link></li>
            <li><Link href="/orders" className="hover:text-amber-300">Orders</Link></li>
          </ul>
        </div>
      </nav>
      <br />

      {/* Main Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen px-6">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={images[currentIndex]}
            alt="hero"
            className="w-50 h-50 animate-spin duration-[100000ms] transition-opacity ease-in-out"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center gap-6 text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl font-semibold bg-gradient-to-b from-yellow-800 via-yellow-700 to-amber-800 bg-clip-text text-transparent">
         Delicious Coffee Is Waiting For You
          </h1>
          <p className="text-lg">
          Enjoy the rich aroma and smooth taste of freshly brewed coffee at Lily's Coffee.
          Our menu features a variety of handcrafted drinks and delicious pastries.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:scale-105 transition duration-200">
              Coffee Menu
            </button>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:scale-105 transition duration-200">
              Take Order
            </button>
          </div>
        </div>
      </div>

      {/* Include Coffelist Below */}
      <Coffelist />
    </div>
  );
}
