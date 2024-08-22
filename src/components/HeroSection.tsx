import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <>
      <div className=" bg-white text-black  px-10 py-6">
        <div className="flex justify-between mx-9 rounded-lg bg-gray-50 p-8 ">
          <div className="flex flex-col justify-between p-4 leading-normal w-2/3">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-900">
              Agriculture
            </h5>
            <p className="mb-3 font-normal text-gray-700 hover:text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <Image
            width={400}
            height={10}
            className="object-cover w-[27rem] h-[10rem]  rounded-t-lg md:rounded-none md:rounded-s-lg p-2 pr-4 rounded-xl"
            src="/images/crop.jpeg"
            alt="crop image"
          />
        </div>

        <div className="flex flex-col py-8 px-12 ">
          <h1 className="text-3xl text-purple-700 font-[inter] font-bold text-center p">
            Explore all courses of Agriculture
          </h1>
          <div className="flex gap-12 py-1">
            <div className="flex flex-col py-2">
              <a href="#">All</a>
              <p className="bg-purple-700 w-5 h-2 rounded-sm"></p>
            </div>
            <div className="flex flex-col py-2">
              <a href="#" className="relative">
                Most Popular
              </a>
            </div>
            <div className="flex flex-col py-2">
              <a href="#">New</a>
            </div>
            <div className="flex flex-col py-2">
              <a href="#">Trending</a>
            </div>
          </div>
          <hr />
          <div className="flex flex-col pt-10    bg-white text-black ">
            <div className="flex gap-2 text-black rounded-full">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Consectetuer
              </button>

              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Consectetuer
              </button>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Consectetuer
              </button>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Consectetuer
              </button>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Consectetuer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
