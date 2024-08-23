import { FaUserCircle } from "react-icons/fa";
import {
  HiAcademicCap,
  HiChevronDown,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { TiGroup, TiWiFi } from "react-icons/ti";

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="bg-white text-black py-4 px-4 md:px-10">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-xl font-[inter] font-semibold text-[#70677B] hover:text-gray-300 cursor-pointer">
              E-NEST
            </div>
            <ul className="flex flex-col md:flex-row items-center gap-4 lg:gap-10">
              <li className="flex items-center">
                <HiAcademicCap className="mr-2" />
                <a
                  href="#"
                  className="font-[inter] font-semibold text-[#70677B] hover:text-gray-300"
                >
                  Program
                </a>
              </li>
              <li className="flex items-center">
                <HiClipboardDocumentList className="mr-2" />
                <a
                  href="#"
                  className="font-[inter] font-semibold text-[#70677B] hover:text-gray-300"
                >
                  Test Series
                </a>
              </li>
              <li className="flex items-center">
                <TiWiFi className="mr-2" />
                <a
                  href="#"
                  className="font-[inter] font-semibold text-[#70677B] hover:text-gray-300"
                >
                  Skill Connect
                </a>
              </li>
              <li className="flex items-center">
                <TiGroup className="mr-2" />
                <a
                  href="#"
                  className="font-[inter] font-semibold text-[#70677B] hover:text-gray-300"
                >
                  Expert Connect
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="font-[inter] font-semibold text-[#70677B] hover:text-gray-300 flex items-center"
                >
                  More
                  <HiChevronDown className="ml-1" />
                </a>
              </li>
            </ul>
            <FaUserCircle className="text-3xl cursor-pointer hover:text-gray-300 mt-4 md:mt-0" />
          </div>
        </nav>
      </div>
      <nav className="bg-purple-800 text-white px-4 md:px-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 gap-4">
          <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-4">
            <button className="px-4 py-2 flex items-center w-full md:w-auto">
              <span>Explore</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="w-full">
              <input
                type="text"
                placeholder="Type skill here"
                className="w-full px-4 py-2 rounded-full focus:outline-none text-black"
              />
            </div>
          </div>
          <div className="flex justify-between w-full md:w-auto items-center gap-4">
            <HiOutlineShoppingCart className="text-2xl cursor-pointer hover:text-gray-300" />
            <FaUserCircle className="text-3xl cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </nav>
    </>
  );
}
