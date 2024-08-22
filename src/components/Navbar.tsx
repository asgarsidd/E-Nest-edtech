import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
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
        <nav className="bg-white text-black py-4 px-10 ">
          <div className="container mx-auto flex justify-around items-center gap-3">
            <div className="text-xl  font-[inter] font-semibold  text-[#70677B]   hover:text-gray-300 cursor-pointer">
              E-NEST
            </div>
            <ul className="md:flex md:gap-10 md:space-x-6">
              <li className="flex">
                {" "}
                <span className="flex items-center px-3">
                  <HiAcademicCap />
                </span>
                <a
                  href="#"
                  className="font-[inter] font-semibold  text-[#70677B] hover:text-gray-300"
                >
                  {" "}
                  Program
                </a>
              </li>
              <li className="flex">
                {" "}
                <span className="flex items-center px-3">
                  <HiClipboardDocumentList />
                </span>
                <a
                  href="#"
                  className="font-[inter] font-semibold  text-[#70677B] hover:text-gray-300 "
                >
                  Test Series
                </a>
              </li>
              <li className="flex">
                {" "}
                <span className="flex items-center px-3">
                  <TiWiFi />
                </span>
                <a
                  href="#"
                  className="font-[inter] font-semibold  text-[#70677B] hover:text-gray-300"
                >
                  Skill Connect
                </a>
              </li>
              <li className="flex">
                {" "}
                <span className="flex items-center px-3">
                  <TiGroup />
                </span>
                <a
                  href="#"
                  className="font-[inter] font-semibold  text-[#70677B] hover:text-gray-300"
                >
                  Expert Connect
                </a>
              </li>
              <li className="flex">
                {" "}
                <span className="flex items-center px-3"></span>
                <a
                  href="#"
                  className="font-[inter] font-semibold  text-[#70677B] hover:text-gray-300 flex"
                >
                  More{" "}
                  <span className="items-center">
                    {" "}
                    <HiChevronDown />
                  </span>{" "}
                </a>
              </li>
            </ul>
            <FaUserCircle className="text-3xl cursor-pointer hover:text-gray-300" />
          </div>
        </nav>
      </div>
      <nav className="bg-purple-800 text-white px-12 overflow-hidden">
        <div className="container mx-auto flex justify-between items-center py-4 ">
          <div className="flex items-center space-x-4 ">
            <div className="flex gap-4">
              <button className=" px-4 py-2  flex items-center">
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
              <div className="flex-grow max-w-lg mx-4 ">
                <input
                  type="text"
                  placeholder="Type skill here"
                  className="w-full px-4 py-2 rounded-full focus:outline-none text-black"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <HiOutlineShoppingCart className="text-2xl cursor-pointer hover:text-gray-300" />
            <FaUserCircle className="text-3xl cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </nav>
    </>
  );
}
