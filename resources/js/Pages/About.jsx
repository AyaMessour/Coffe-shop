import React from 'react';
import { Link } from '@inertiajs/react';
import Footer from './Footer';

function About() {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-amber-700 via-amber-200 to-amber-600">
      {/* Navbar Section */}
      <nav className="bg-amber-800 text-white p-4 fixed w-full top-0 left-0 z-10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Lily's Coffee</h1>
          <ul className="flex space-x-6 text-lg">
            <li><Link href="/Home" className="hover:text-amber-300">Home</Link></li>
            <li><Link href="/cart" className="hover:text-white">Cart</Link></li>
            <li><Link href="/About" className="hover:text-amber-300">About</Link></li>
            <li><Link href="/contact" className="hover:text-amber-300">Contact</Link></li>
            <li><Link href="/orders" className="hover:text-amber-300">Orders</Link></li>
          </ul>
        </div>
      </nav>

      {/* About Content Section */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 mt-24">
        <h2 className="text-3xl font-semibold mb-6 text-white">About Lily's Coffee</h2>

        <p className="text-lg text-black bg-gradient-to-b from-gray-900 via-stone-900 to-zinc-900 bg-clip-text text-transparent mb-4">
          Lily's Coffee is a local coffee shop committed to providing high-quality coffee in a friendly and comfortable setting.
          Whether you’re here for a quick coffee to go or want to relax and enjoy a freshly brewed cup, we’re here to serve you.
        </p>

        <p className="text-lg text-black mb-4">
          We offer a variety of coffee drinks, including espresso, lattes, cappuccinos, and more.
          Our beans are carefully selected to ensure the best flavor in every cup.
        </p>

        {/* Location Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-white  mb-4">Our Location</h3>
          <p className="text-lg text-black mb-4">
            You can visit us at our convenient location in the heart of the city. We are easy to find and always happy to welcome new customers.
          </p>

          {/* Google Map Embed */}
          <div className="w-full max-w-4xl  bg-gradient-to-br from-amber-700 via-amber-200 to-amber-600">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106369.75187783966!2d-7.755206283593753!3d33.577927800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3dee4ed5985%3A0xb1463e1cec3c9246!2scafe%20illy%20maroc%20-%20capsules%20a%20cafe%20-%20cafe%20en%20grain%20-%20cafe%20l%20ore%20-%20capsule%20illy%20compatible%20-%20machine%20a%20cafe!5e0!3m2!1sfr!2sma!4v1738333623986!5m2!1sfr!2sma"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default About;
