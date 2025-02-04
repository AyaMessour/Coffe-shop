import React from "react";
import { Link } from "@inertiajs/react";
import logo from "./photos/logo-1.jpg";
import payImage from "./photos/pay.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-700 via-amber-500 to-amber-100 text-white py-10">
      <div className="container mx-auto px-5">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-lg font-bold">Company</h2>
            <p className="mt-2">
              Find a location nearest you. See{" "}
              <Link href="/map" className="text-white underline">
                Our Stores
              </Link>
            </p>
            <p className="font-bold mt-2">+212-766989130</p>
            <p>ayamessour35@gmail.com</p>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-lg font-bold">Useful links</h2>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="#" className="hover:text-amber-900">
                  New Products
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-900">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-900">
                  Bundle & Save
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-900">
                  Online Gift Card
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h2 className="text-lg font-bold">Information</h2>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="#" className="hover:text-amber-900">
                  Start a Return
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-900">
                  Shipping FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-900">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-900">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

         
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-white/50 pt-5">
          <p>© 2025 Lily's Coffee. All rights reserved.</p>
          <img src={logo} width="150" alt="Lily's Coffee Logo" />

          {/* Social Links */}
        

          {/* Logo & Payment */}
          <div className="flex flex-col items-center space-y-5 mt-3 md:mt-0">
 
  <img src={payImage} width="200" alt="Payment Methods" />
</div>

        </div>
      
    </footer>
  );
}
