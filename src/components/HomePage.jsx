import {useState} from 'react'
import{Link} from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const HomePage = () => {
    const [isMenuOpen,setisMenuOpen] =useState(false);

  return (
    <div className="">
      <header className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-gray-50 drop-shadow-md">
        <div className="flex">
          <div className="size-6 rounded-xl  bg-green-400 -mr-2"></div>
          <div className="size-6 rounded-xl  bg-red-500 mr-2"></div>
          <div className="font-bold">BSE-GRP-28</div>
        </div>
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3 hover:bg-green-400 hover:text-white rounded-md transition-all duration-200 cursor-pointer">
            Home
          </li>
          <li className="p-3 hover:bg-green-400 hover:text-white rounded-md transition-all duration-200 cursor-pointer">
            About
          </li>
          <li className="p-3 hover:bg-green-400 hover:text-white rounded-md transition-all duration-200 cursor-pointer">
            <Link to="team">Team & Roles</Link>
          </li>
          <li className="p-3 hover:bg-green-400 hover:text-white rounded-md transition-all duration-200 cursor-pointer">
            Artifacts
          </li>
          <li className="p-3 hover:bg-green-400 hover:text-white rounded-md transition-all duration-200 cursor-pointer">
            contact
          </li>
        </ul>
        <FaBars
          size={20}
          className=" xl:hidden block text-5xl cursor-pointer"
          onClick={() => setisMenuOpen(!isMenuOpen)}
        />
        <div
          className={`absolute xl:hidden top-24 left-0 w-full bg-slate-50 flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "opacity-0.2" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <li className="list-none w-full text-center p-4 hover:bg-green-400 hover:text-white">
            Home
          </li>
        </div>
      </header>
    </div>
  );
}

export default HomePage
