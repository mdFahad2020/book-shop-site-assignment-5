import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const EditBookModal = ({ sortedProduct, closeEditClick}) => {


  const handleOnSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <div onClick={closeEditClick} className="fixed top-10 md:top-0 inset-0 w-full min-h-full z-50 bg-black bg-opacity-80 flex items-center justify-center overflow-auto">
      <form  onClick={e => e.stopPropagation()} className="w-full max-w-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl max-h-full overflow-auto bg-gray-100 shadow-xl p-6 md:p-8 lg:p-10 rounded-xl flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold text-[#499F78]">Edit Book Information</h2>
          <button onClick={closeEditClick} className="bg-orange-100 p-2 rounded-full">
            <RxCross2  className="text-2xl text-[#EF6B4A]" />
          </button>
        </div>
        <div className="flex md:flex-row flex-col gap-3 md:items-center justify-between">
          <div className="flex flex-col space-y-1 md:space-y-3">
            <div>
              <label className="text-sm text-[#1E1E1E] mb-1">Book Name</label>
              <input
                className="border text-sm py-1 px-3 rounded-md w-full"
                type="text"
                placeholder="Book name"
              />
            </div>
            <div>
              <label className="text-sm text-[#1E1E1E] mb-1">Author Name</label>
              <input
                className="border text-sm py-1 px-3 rounded-md w-full"
                type="text"
                placeholder="Author name"
              />
            </div>
            <div>
              <label className="text-sm text-[#1E1E1E] mb-1">Image URL</label>
              <input
                className="border text-sm py-1 px-3 rounded-md w-full"
                type="text"
                placeholder="Image URL"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1 md:space-y-3">
            <div>
              <label className="text-sm text-[#1E1E1E] mb-1">Rating</label>
              <input
                className="border text-sm py-1 px-3 rounded-md w-full"
                type="number"
              />
            </div>
            <div>
              <label className="text-sm text-[#1E1E1E] mb-1">Price</label>
              <input
                className="border text-sm py-1 px-3 rounded-md w-full"
                type="number"
              />
            </div>
            <div>
              <label
                className="text-sm text-[#1E1E1E] mb-1"
              >
                Category
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2 block"
              >
                <option selected>Choose Books</option>
                <option value="islamic">Islamic</option>
                <option value="science">Science fiction</option>
                <option value="historical">Historical fiction</option>
                <option value="thriller">Thriller</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <label className="text-sm text-[#1E1E1E] mb-1">Book Review</label>
          <textarea className="block border text-sm py-1 px-3 rounded-md w-full"></textarea>
        </div>
        <button type="submit" className="bg-[#499F78] py-2 px-6 text-white mt-3 hover:bg-green-400 transition-all rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default EditBookModal;
