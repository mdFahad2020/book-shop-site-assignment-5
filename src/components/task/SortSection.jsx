import { MdSort } from "react-icons/md";

const SortSection = ({ products, setSortedProduct }) => {

  const handleSort = (sortType) => {
    let sortFunction;
    
    if (sortType === 'price') {
      sortFunction = (products) => products.sort((a, b) => b.price - a.price);
    } else if (sortType === 'name') {
      sortFunction = (products) => products.sort((a, b) => a.name.localeCompare(b.name));
    } else if(sortType === 'rating') {
      sortFunction = (products) => products.sort((a, b) => b.rating - a.rating)
    }

    setSortedProduct(sortFunction);
  };

  
  return (
    <div className="bg-white dark:bg-slate-700 dark:text-slate-400 text-gray-800 mt-32 pt-10 mb-8">
      <div className="mx-auto px-4 md:px-8 lg:px-12py-4 flex flex-col sm:flex-row gap-5 items-center font-medium text-sm">
      <span className="text-5xl text-[#80CC72]"><MdSort /></span>
      <button onClick={() => handleSort('name')} className="border-2 border-[#80CC72] py-2 px-6 rounded-xl hover:shadow-md transition-all">Filter by Name</button>
      <button onClick={() => handleSort('price')} className="border-2 border-[#80CC72] py-2 px-6 rounded-xl hover:shadow-md transition-all">Filter by Price</button>
      <button onClick={() => handleSort('rating')} className="border-2 border-[#80CC72] py-2 px-6 rounded-xl hover:shadow-md transition-all">Filter by Rating</button>
    </div>
    </div>
  )
}

export default SortSection;