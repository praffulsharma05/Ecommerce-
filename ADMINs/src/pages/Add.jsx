
import React, { useState } from "react";
import { assets } from "../admin_assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setPrice("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setSizes([]);
        setBestseller(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1512436991641-6745cdb1723f")',
      }}
    >
      <form
        onSubmit={onSubmitHandler}
        className="backdrop-blur-md bg-white/80 p-6 md:p-10 rounded-xl shadow-2xl w-full max-w-4xl mx-auto flex flex-col gap-5"
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Add New Product
        </h2>

        <div>
          <p className="font-semibold mb-2">Upload images</p>
          <div className="flex gap-3 flex-wrap">
            {[image1, image2, image3, image4].map((img, idx) => (
              <label
                key={idx}
                htmlFor={`image${idx + 1}`}
                className="cursor-pointer"
              >
                <img
                  className="w-20 h-20 object-cover rounded shadow-md hover:scale-105 transition"
                  src={!img ? assets.upload_area : URL.createObjectURL(img)}
                  alt={`upload-${idx}`}
                />
                <input
                  hidden
                  type="file"
                  id={`image${idx + 1}`}
                  onChange={(e) => {
                    const setter = [setImage1, setImage2, setImage3, setImage4][
                      idx
                    ];
                    setter(e.target.files[0]);
                  }}
                />
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold mb-2">Product Name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Type here"
            required
            className="w-full max-w-md px-4 py-2 rounded-md border shadow-sm focus:ring focus:outline-none"
          />
        </div>

        <div>
          <p className="font-semibold mb-2">Product Description</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write content here"
            required
            className="w-full max-w-md px-4 py-2 rounded-md border shadow-sm focus:ring focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <div>
            <p className="font-semibold mb-2">Category</p>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 rounded-md border shadow-sm"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div>
            <p className="font-semibold mb-2">Subcategory</p>
            <select
              onChange={(e) => setSubCategory(e.target.value)}
              className="px-4 py-2 rounded-md border shadow-sm"
            >
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>
          <div>
            <p className="font-semibold mb-2">Price (₹)</p>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="px-4 py-2 rounded-md border shadow-sm"
              placeholder="25"
            />
          </div>
        </div>

        <div>
          <p className="font-semibold mb-2">Select Sizes</p>
          <div className="flex gap-3 flex-wrap">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes(size)
                      ? prev.filter((s) => s !== size)
                      : [...prev, size]
                  )
                }
              >
                <p
                  className={`px-3 py-1 rounded-full shadow cursor-pointer ${
                    sizes.includes(size)
                      ? "bg-pink-200 text-black"
                      : "bg-slate-200"
                  }`}
                >
                  {size}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={bestseller}
            onChange={() => setBestseller((prev) => !prev)}
            id="bestseller"
          />
          <label
            htmlFor="bestseller"
            className="cursor-pointer font-medium text-sm"
          >
            Add to Bestseller
          </label>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
