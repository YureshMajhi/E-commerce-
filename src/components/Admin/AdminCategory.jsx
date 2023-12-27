import React, { useEffect, useState } from "react";
import { deleteCategory, getAllCategories } from "../../api/categoryApi";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const AdminCategory = () => {
  const [change, handleChange] = useState(true);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  }, [change]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Category",
      text: "Are you sure you want to delete this category?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "red",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCategory(id).then((data) => {
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
              title: "Category Deleted Successfully",
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
      <ToastContainer theme="colored" position="top-center" />

      <div className="max-w-3xl mx-auto px-4">
        {/* Title */}
        <div className="flex justify-between my-4">
          <h2 className="text-4xl text-[#084240]">Categories</h2>
          <button className="bg-[#084240] text-white p-3 rounded text-sm border-2 border-white hover:border-[#084240]">
            <Link to={"/admin/category/add"}>Add New Category</Link>
          </button>
        </div>

        {/* Display Categories */}
        <table className="w-full">
          <thead className="bg-gray-200 text-white text-lg">
            <tr>
              <th>S.No.</th>
              <th>Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {categories &&
              categories.map((category, i) => {
                return (
                  <tr key={i} className="hover:bg-gray-200">
                    <td className="text-xl text-gray-700">{i + 1}</td>
                    <td className="text-xl text-gray-700">{category.title}</td>
                    <td className="w-36 p-2">
                      <div className="flex flex-col gap-2 text-white">
                        <Link
                          to={`update/${category._id}`}
                          className="bg-yellow-500 hover:bg-yellow-300 p-2 rounded-md"
                        >
                          <button>Update</button>
                        </Link>
                        <button
                          onClick={() => handleDelete(category._id)}
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

export default AdminCategory;
