import "../../style/ProductSection.css";
import { useState } from "react";
import { FaStar, FaEdit, FaRegHeart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import BookDetails from "./BookDetails";
import EditBookModal from "./EditBookModal";


const ProductSection = ({  sortedProduct, toggleView, searchProduct }) => {
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false);
 

  const handleProductDetails = () => {
    setShowProductDetails(true);
  };

  const closeProductDetails = () => {
    setShowProductDetails(false);
  };

  const handleEditClick = () => {
    setShowEditProduct(true);
  }

  const closeEditClick = () => {
    setShowEditProduct(false)
  }

  return (
    <div className="bg-white dark:bg-slate-700 pb-4 mb- mt-2">
      {sortedProduct.length > 0 ? (
        <div className="mx-auto px-4 md:px-8 lg:px-12 ">
          <div
            className={` shadow-xl gap-4 ${
              toggleView
                ? "productView "
                : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
            }`}
          >
            {sortedProduct.map((product) => (
              <div
                key={product.id}
                className={`border shadow-md flex flex-row gap-2 p-3 rounded-md transition-all transform duration-500 ${
                  toggleView && "gap-5 md:gap-20"
                }`}
              >
                <div
                  onClick={handleProductDetails}
                  className={`hover:scale-105 transition-all duration-500 cursor-pointer ${
                    toggleView && `product-img-div`
                  }`}
                >
                  <img
                    className="h-32 w-26 object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className={`w-full`}>
                  <h2 className="font-semibold text-[#090937] text-lg">
                    {product.name}
                  </h2>
                  <p className="text-[12px] my-1 dark:text-slate-300 text-[#4D506C]">
                    {product.writer}
                  </p>
                  <div
                    className={`flex gap-2 items-center justify-between ${
                      toggleView && "flex-col items-baseline gap-4"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 text-[12px] text-[#FFAE00]`}
                    >
                      <p className="flex items-center gap-1 text-nowrap">
                        {product.rating} <span>{<FaStar />}</span>
                      </p>
                      <span>{product.publication}</span>
                    </div>
                    <div
                      className={`flex justify-between gap-2 text-[#FFAE00]`}
                    >
                      <button onClick={handleEditClick}>
                        <FaEdit  />
                      </button>
                      <button>
                        <FaRegHeart />
                      </button>
                      <button className="text-rose-500">
                        <MdDeleteForever />
                      </button>
                    </div>
                  </div>
                  <div
                    className={`flex items-center justify-between mt-3 ${
                      toggleView && "flex-col items-baseline gap-4"
                    }`}
                  >
                    <p className="text-[#80CC72] font-semibold">
                      {product.price} &#x09F3;
                    </p>
                    <button
                      onClick={handleProductDetails}
                      className="text-white bg-[#80CC72] text-sm font-semibold py-1 px-4 rounded-md"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center w-full h-screen bg-white dark:bg-slate-700 pb-4 mx-5">
          <div className="flex flex-col space-y-10">
            <div>
              <p className="text-2xl font-bold mb-2">Sorry! No Result found</p>
              <p>
                We’re sorry what you were looking for. Please try another way
              </p>
            </div>
            <ul className="list-inside list-disc">
              <p className="font-bold">Suggestions:</p>
              <li>বইয়ের নামের বানান সঠিকভাবে লিখুন</li>
              <li>বাংলা এবং ইংরেজী দু-ভাষায়ই সার্চ করতে পারেন</li>
              <li>সকল বইয়ের ক্যাটাগরি দেখতে এই লিংকে</li>
            </ul>
            <a className="bg-[#499F78] py-2 text-gray-100 text-center" href=""><button >Back to Home</button></a>
          </div>
        </div>
      )}
      {showProductDetails && (
        <BookDetails
        sortedProduct={sortedProduct}
          closeProductDetails={closeProductDetails}
        />
      )}
      {
        showEditProduct && (
          <EditBookModal sortedProduct={sortedProduct}
          closeEditClick={closeEditClick} />
        )
      }
      
    </div>
  );
};

export default ProductSection;
