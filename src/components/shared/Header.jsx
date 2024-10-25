import AddBookModal from "../task/AddBookModal";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { GiBookPile } from "react-icons/gi";
import { HiViewGrid } from "react-icons/hi";
import { FaHeart } from "react-icons/fa6";
import { MdLightMode, MdDarkMode, MdViewComfy } from "react-icons/md";
import { useState } from "react";


const Header = ({ handleViewClick, darkModeHandler, dark, toggleView, handleSearchChange, searchQuery, setSortedProduct, sortedProduct }) => {
  const [showAddBookModal, setShowAddBookModal] = useState(false);

  const handleAddTask = (newProduct) => {
    setSortedProduct([ newProduct, ...sortedProduct]);
  };

  console.log(handleAddTask);


  const handleAddBookModal = () => {
    setShowAddBookModal(true)
  }

  const handleAddBookClose = () => {
    setShowAddBookModal(false);
  }

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-md border-b-2 border-b-[#80CC72] dark:border-b-slate-500 fixed top-0 w-full z-40">
      <div className="mx-auto px-4 md:px-8 lg:px-12 py-4 flex gap-2 flex-col sm:flex-row justify-between items-center">
        <div className="text-lg font-bold hidden sm:block">
          <a href="">
            <GiBookPile className="text-[#499F78] w-20 h-24" />
          </a>
        </div>
        <div className="relative flex-1 mx-4 max-w-[550px] ">
          <form>
            <input
              type="text"
              onChange={handleSearchChange}
              value={searchQuery}
              placeholder="Search Product"
              className="bg-[#e4f7e1] dark:bg-slate-600 text-[#090937] text-lg w-full py-3 pl-12 rounded-lg"
            />
            <FaSearch className="absolute w-5 h-5 top-4 left-5 text-[#090937] opacity-40"></FaSearch>
          </form>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-10 justify-between">
          <button onClick={handleViewClick}>
            {
              toggleView && (
                <HiViewGrid className="w-7 h-7 text-[#090937] dark:text-slate-200 dark:hover:text-slate-400  hover:text-[#181b97] transition-all transform hover:scale-125 duration-500" />
              )
            }
            {
              !toggleView && (
                <MdViewComfy className="w-7 h-7 text-[#090937] dark:text-slate-200 dark:hover:text-slate-400  hover:text-[#181b97] transition-all transform hover:scale-125 duration-500" />
              )
            }
          </button>
          <button>
            <FaHeart className="w-7 h-7 text-[#FFAE00] dark:text-slate-200 dark:hover:text-slate-400  hover:text-[#ffcf1b] transition-all transform hover:scale-125 duration-500" />
          </button>
          <button onClick={darkModeHandler}>
            {dark && (
              <MdLightMode className="w-7 h-7 text-[#FFAE00]  hover:text-[#ffcf1b] transition-all transform hover:scale-125 duration-500" />
            )}
            {!dark && (
              <MdDarkMode className="w-7 h-7 text-slate-100 hover:text-slate-200  transition-all transform hover:scale-125 duration-500" />
            )}
          </button>
          <button onClick={handleAddBookModal} className="flex items-center gap-3 bg-transparent text-[#499F78] border-[3px] px-5 border-[#499F78] font-semibold rounded-xl">
            <span className="font-bold text-3xl mb-1.5">+</span> Add Book
          </button>
        </div>
      </div>
      {showAddBookModal && (
        <AddBookModal handleAddBookClose={handleAddBookClose} handleAddTask={handleAddTask} />
      )}
    </nav>
  );
};

export default Header;
