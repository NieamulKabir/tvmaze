import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import logo from "../assets/tvm-header-logo.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex items-center py-3 fixed top-0 z-20 bg-gray-800 px-6 md:px-16 lg:px-24 font-mono ">
      <div className="w-full flex justify-between items-center max-w-screen mx-auto ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
        
          <img  className="h-10 w-20" src={logo} alt="" />
          
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-8 text-white">
          <li
            className={`${
              active === "/home" ? "text-[#38b6aa]" : "text-white"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("/home")}
          >
            <NavLink to="/home">
              <button className="">Home</button>
            </NavLink>
          </li>
          <li
            className={`${
              active === "/shows" ? "text-[#38b6aa]" : "text-white"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("/shows")}
          >
            <NavLink to="/shows">
              <button className="">Shows</button>
            </NavLink>
          </li>
          
          {/* login  */}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gray-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col first-letter:gap-4">
              <li
                className={`${
                  active === "/home" ? "text-green-300" : "text-white"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive("/home")}
              >
                <NavLink to="/home">
                  <button className="">Home</button>
                </NavLink>
              </li>
              <li
                className={`${
                  active === "/shows" ? "text-green-300" : "text-white"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive("/shows")}
              >
                <NavLink to="/shows">
                  <button className="">Shows</button>
                </NavLink>
              </li>
              

              {/* login  */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
