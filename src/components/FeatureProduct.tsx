import React from "react";

export default function () {
  return (
    <>
      <div className="w-full px-6 py-10"> 
        <h1 className="px-6 text-purple-700 text-center font-bold font-[inter] bg-gray-50 text-3xl">
          Featured Course
        </h1>
        <div className="flex flex-col md:flex-row gap-6 px-6 bg-white rounded-lg shadow-md overflow-hidden p-3 my-5 border-2"> 
          <img
            src="./images/crop.jpeg"
            alt="Microscope"
            className="w-full md:w-1/3 h-33 object-cover rounded-md"
          />
          <div className="p-5 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-[#3f3e40] font-[Outfit] cursor-pointer">
              Machine Learning
            </h2>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa at,
              minima consectetur saepe ut cumque omnis ipsum esse magnam sed.
              Eveniet libero eaque autem vitae nam ipsum dolorum temporibus
              cupiditate.
            </p>
            <p className="text-black font-bold">Dr Chatur Diwedi</p>
            <span className="text-2xl font-normal text-[#8A8491] font-[Outfit]">
              ₹999
            </span>
            <div className="flex flex-col">
              <div className="flex gap-4 text-center">
                <div>
                  <span className="text-purple-700 text-2xl sm:text-xs ">★★★★★</span>
                  <span className="text-gray-600 text-2xl sm:text-xs ">4.8</span>
                </div>

                <button className="bg-yellow-400 text-white  sm:w-2 sm:h-4 py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300">
                  Bestseller
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
