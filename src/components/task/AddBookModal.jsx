import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const AddBookModal = ({ handleAddBookClose, handleAddTask }) => {
  const [task, setTask] = useState({
    id: crypto.randomUUID(),
    name: "",
    writer: "",
    rating: "",
    publication: "",
    description: "",
    price: "",
    isFavorite: false,
  });
  console.log(task);

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask(task);
    handleAddBookClose();
  };
  return (
    <div
      onClick={handleAddBookClose}
      className="fixed top-10 md:top-0 inset-0 w-full min-h-full z-10 bg-black bg-opacity-80 flex items-center justify-center overflow-auto"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="w-full max-w-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl max-h-full overflow-auto bg-gray-100 shadow-xl p-6 md:p-8 lg:p-10 rounded-xl flex flex-col"
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold text-[#499F78]">Add a Book</h2>
          <button
            type="submit"
            onClick={handleAddBookClose}
            className="bg-orange-100 p-2 rounded-full"
          >
            <RxCross2 className="text-2xl text-[#EF6B4A]" />
          </button>
        </div>
        <div className="flex flex-col md:flex-row  md:gap-5 md:items-center justify-between">
          <div className="flex flex-col space-y-1 md:space-y-3">
            <div>
              <label className="text-sm text-[#1E1E1E] mb-1">Book Name</label>
              <input
                className="border text-sm py-1 px-3 rounded-md w-full"
                type="text"
                placeholder="Book name"
                name="name"
                id="name"
                value={task.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="text-sm text-[#1E1E1E] mb-1">Author Name</label>
              <input
                className="border text-sm py-1 px-3 rounded-md w-full"
                type="text"
                placeholder="Author name"
                name="writer"
                id="writer"
                value={task.writer}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="text-sm text-[#1E1E1E] mb-1">Publication</label>
              <input
                className="border text-sm py-1 px-3 rounded-md w-full"
                type="text"
                placeholder="Publication"
                name="publication"
                id="publication"
                value={task.publication}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1 md:space-y-3">
            <div>
              <label className="text-sm text-[#1E1E1E] mb-1">Rating</label>
              <input
                className="border text-sm py-1 px-3 rounded-md w-full"
                type="number"
                name="rating"
                id="rating"
                value={task.rating}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-sm text-[#1E1E1E] mb-1">Price</label>
              <input
                className="border text-sm py-1 px-3 rounded-md w-full"
                type="number"
                name="price"
                id="price"
                value={task.price}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="text-sm text-[#1E1E1E] mb-1">Category</label>
              {/* <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
              >
                <option selected>Choose Books</option>
                <option value="islamic">Islamic</option>
                <option value="science">Science fiction</option>
                <option value="historical">Historical fiction</option>
                <option value="thriller">Thriller</option>
              </select> */}
            </div>
          </div>
        </div>
        <div className="mt-3">
          <label className="text-sm text-[#1E1E1E] mb-1">Book Review</label>
          <textarea  className="block border text-sm py-1 px-3 rounded-md w-full"></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#499F78] py-2 px-6 text-white mt-3 hover:bg-green-400 transition-all rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBookModal;
