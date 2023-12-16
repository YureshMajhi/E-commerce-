import React from "react";

const AddCategory = () => {
  return (
    <>
      <form className="flex flex-col text-center gap-6">
        <h2 className="text-4xl text-[#084240] mb-4">Add New Category</h2>
        <input
          type="text"
          placeholder="Enter New Category"
          className="border-[#7c8d87] border-[1px] p-3 w-[350px] mx-auto"
        />
        <button className="bg-[#084240] text-white p-3 rounded w-[105px] border-2 border-white hover:border-[#084240] mx-auto">
          Add
        </button>
      </form>
    </>
  );
};

export default AddCategory;
