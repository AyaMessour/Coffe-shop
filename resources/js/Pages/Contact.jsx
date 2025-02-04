import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

function Contact() {
  const [state, handleSubmit] = useForm("xanqjppg");

  const showSuccessToast = () => {
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 3000, // Closes after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event); // Formspree submission
    if (state.succeeded) {
      showSuccessToast();
    }
  };

  return (
    <div className="bg-gradient-to-br from-amber-700 via-amber-200 to-amber-600 min-h-screen">
      {/* Navbar */}
      <nav className="bg-amber-800 text-white p-4 fixed w-full top-0 left-0 z-10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Lily's Coffee</h1>
          <ul className="flex space-x-6 text-lg">
            <li><a href="/" className="hover:text-amber-300">Home</a></li>
            <li><a href="/Menu" className="hover:text-amber-300">Menu</a></li>
            <li><a href="/cart" className="hover:text-amber-300">Cart</a></li>
            <li><a href="/About" className="hover:text-amber-300">About</a></li>
            <li><a href="/orders" className="hover:text-amber-300">Orders</a></li>
          </ul>
        </div>
      </nav>

      <br /><br />

      <div className="mt-20 p-6 bg-white shadow-lg rounded-lg mx-auto w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Contactez-nous</h1>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-semibold text-gray-700">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full p-3 border rounded focus:ring-2 focus:ring-amber-500"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 border rounded focus:ring-2 focus:ring-amber-500"
              rows="4"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button 
            type="submit" 
            disabled={state.submitting} 
            className="w-full bg-amber-700 text-white py-3 rounded hover:bg-amber-800 focus:outline-none transition duration-300"
          >
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer />

      <br />
      <Footer />
    </div>
  );
}

export default Contact;
