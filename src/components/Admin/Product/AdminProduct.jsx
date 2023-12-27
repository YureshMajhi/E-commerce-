import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteProduct, getAllProducts } from "../../../api/productapi";
import { API } from "../../../config";
import Swal from "sweetalert2";

const AdminProduct = () => {
  const [change, handleChange] = useState(true);

  let [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  }, [change]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Product",
      text: "Are you sure you want to delete this Product?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "red",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id).then((data) => {
          if (data.error) {
            Swal.fire({
              title: data.error,
              icon: "error",
              timer: 2000,
              showConfirmButton: false,
              position: "top-right",
            });
          } else {
            Swal.fire({
              title: "Product Deleted Successfully",
              icon: "success",
              timer: 2000,
              showConfirmButton: false,
              position: "top-right",
            });
            handleChange(!change);
          }
        });
      }
    });
  };

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
