import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const CreateProduct = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", form.name);
    data.append("description", form.description);
    data.append("price", form.price);
    if (form.image) {
      data.append("image", form.image);
    }

    Inertia.post("/products", data);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add a Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
        />
        <button
          type="submit"
          className="bg-amber-600 text-white px-4 py-2 rounded hover:scale-105 transition duration-200"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
