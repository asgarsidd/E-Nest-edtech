import React from "react";

export default function () {
  return (
    <>
      <div className="bg-gray-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-8 lg:px-12"> 
        <div className="rounded-xl shadow-md overflow-hidden p-3 my-5 border-2">
          <img
            src="./images/crop.jpeg"
            alt="Microscope"
            className="w-full h-48 object-cover rounded-xl"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">
              Consectetur adipiscing elit
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh...
            </p>
            <span className="text-2xl font-normal text-[#8A8491] font-[Outfit] text-center">
              ₹999
            </span>
            <div className="flex justify-between py-1 items-center">
              <div className="flex gap-1 items-center"> {/* Changed from text-center to items-center */}
                <span className="text-purple-700 text-2xl">★★★★★</span>
                <span className="text-gray-600 text-2xl">4.8</span>
              </div>
              <button className="bg-yellow-400 text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300">
                Bestseller
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
