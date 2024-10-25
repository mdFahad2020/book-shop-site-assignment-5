import { FaRegHeart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const BookDetails = ({ sortedProduct, closeProductDetails }) => {

  const index = 2;

  return (
    <div onClick={closeProductDetails} className="fixed top-32 md:top-0 inset-0 w-full md:min-h-full z-50 bg-black bg-opacity-80 flex items-center justify-center overflow-auto">
      <div onClick={e => e.stopPropagation()} className="w-full max-w-lg sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl max-h-full overflow-auto bg-gray-100 shadow-xl p-6 md:p-8 lg:p-10 rounded-xl">
        <div className="flex items-center justify-between ">
          <h3 className="text-md font-semibold text-[#499F78]">Book Details</h3>
          <div className="flex gap-4 items-center">
            <button className="bg-gray-200 p-2 rounded-full">
              <FaRegHeart className="text-xl text-[#FFAE00]" />
            </button>
            <button onClick={closeProductDetails} className="bg-orange-100 p-2 rounded-full">
              <RxCross1 className="text-[#EF6B4A] text-xl" />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="bg-green-50 p-4 rounded-2xl w-48 md:w-72">
            <img className="w-full  h-full object-cover rounded-lg" src={sortedProduct[index].image} alt="" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#090937] mb-3">
              {sortedProduct[index].name}
            </h1>
            <h3 className="text-xl font-medium text-gray-500 mb-5">
              {sortedProduct[index].writer}
            </h3>
            <h3 className="text-lg font-semibold text-[#090937] mb-2">
              Book Review:
            </h3>
            <p className="text-sm mb-7">
              | দুই হাজার শব্দের আভিধানিক শিট সংযোজিত || শব্দে শব্দে অনুবাদ, তাই
              কুরআন-শিক্ষার্থীদের জন্য এটি অত্যন্ত সহায়ক || আরবি শব্দ
              রূপান্তরের প্রাথমিক ধারণা সংযোজন || আয়াতের পূর্ণাঙ্গ অর্থ সাবলীল
              ভাষায় রচিত
            </p>
            <button className="flex items-center border-2 border-green-400 p-1 rounded-full">
              <span className="bg-[#499F78] text-white text-sm py-1 px-5 rounded-full">
                Buy Now
              </span>{" "}
              <span className="text-[#499F78] px-4">{sortedProduct[index].price} &#x09F3; </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
