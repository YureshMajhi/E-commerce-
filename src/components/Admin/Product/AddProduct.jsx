import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../../api/categoryApi";

const AddProduct = () => {
  const [product, setProduct] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  }, []);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-6 p-4 bg-[#08424038] max-w-lg ml-6 rounded-lg border-2 border-[#084240]"
      >
        <h2 className="text-4xl text-[#084240] mb-4 underline">
          Add New Product
        </h2>

        {/*  result */}
        {/* {showError()}
        {showSuccess()} */}

        <div className="w-full">
          <label className="text-[#084240] font-bold text-lg" htmlFor="title">
            Product Name
          </label>
          <input
            type="text"
            placeholder="Enter New Product"
            id="title"
            onChange={(e) => setProduct(e.target.value)}
            className="p-2 rounded w-full"
          />
        </div>

        <div className="w-full">
          <label className="text-[#084240] font-bold text-lg" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            placeholder="Enter Price"
            id="price"
            onChange={(e) => setProduct(e.target.value)}
            className="p-2 rounded w-full"
          />
        </div>

        <div className="w-full">
          <label
            className="text-[#084240] font-bold text-lg"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            placeholder="Describe your product"
            id="description"
            rows={4}
            onChange={(e) => setProduct(e.target.value)}
            className="p-2 rounded w-full resize-none"
          ></textarea>
        </div>

        <div className="w-full">
          <label
            className="text-[#084240] font-bold text-lg"
            htmlFor="count_in_stock"
          >
            Count in Stock
          </label>
          <input
            type="number"
            placeholder="Stock"
            id="count_in_stock"
            onChange={(e) => setProduct(e.target.value)}
            className="p-2 rounded w-full"
          />
        </div>

        <div className="w-full">
          <label className="text-[#084240] font-bold text-lg" htmlFor="image">
            Image
          </label>
          <input
            type="file"
            placeholder="Image"
            id="image"
            onChange={(e) => setProduct(e.target.value)}
            className="p-2 rounded w-full"
          />
        </div>

        <div className="w-full">
          <label
            className="text-[#084240] font-bold text-lg"
            htmlFor="category"
          >
            Select Category
          </label>
          <select id="category" defaultValue="" className="p-2 rounded w-full">
            <option value="" disabled>
              Choose a Category
            </option>
            {/* Category list from api */}
            {categories &&
              categories.map((category, i) => (
                <option key={i} value={category.title}>
                  {category.title}
                </option>
              ))}
          </select>
        </div>
        <button className="bg-[#084240] text-white p-3 rounded w-[105px] border-2 border-[#08424000] mx-auto">
          Add
        </button>
      </form>
    </>
  );
};

export default AddProduct;
