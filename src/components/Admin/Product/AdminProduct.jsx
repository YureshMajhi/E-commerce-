import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../../api/productapi";
import { API } from "../../../config";

const AdminProduct = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  }, []);

  return (
    <>
      <div className="w-full mx-auto px-4">
        {/* Title */}
        <div className="flex justify-between my-4">
          <h2 className="text-4xl text-[#084240]">Products</h2>
          <Link to={"/admin/product/add"}>
            <button className="bg-[#084240] text-white p-3 rounded text-sm border-2 border-white hover:border-[#084240]">
              Add New Product
            </button>
          </Link>
        </div>

        {/* Display Products table */}
        <table className="w-full">
          <thead className="bg-gray-200 text-white text-lg">
            <tr>
              <th>S.No.</th>
              <th>Product</th>
              <th>Title</th>
              <th>Unit Price</th>
              <th>Count in Stock</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {products &&
              products.map((product, i) => {
                return (
                  <tr key={i} className="hover:bg-gray-200">
                    <td className="text-xl text-gray-700">{i + 1}</td>
                    <td>
                      <img
                        className="h-28 max-w-sm mx-auto p-2"
                        src={`${API}/${product.image}`}
                        alt={product.title}
                      />
                    </td>
                    <td className="text-xl text-gray-700">{product.title}</td>
                    <td className="text-xl text-gray-700">{product.price}</td>
                    <td className="text-xl text-gray-700">
                      {product.count_in_stock}
                    </td>
                    <td>{product.category?.title}</td>

                    <td className="w-36 p-2">
                      <div className="flex flex-col gap-2 text-white">
                        <Link
                          to={`update/${product._id}`}
                          className="bg-yellow-500 hover:bg-yellow-300 p-2 rounded-md"
                        >
                          <button>Update</button>
                        </Link>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="bg-red-500 hover:bg-red-300 p-2 rounded-md"
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminProduct;
