import { NavLink } from "react-router-dom";
import { FaHome, FaBook } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-[#ffffff] px-6 py-4 [box-shadow:0_4px_6px_-1px_rgba(0,0,0,0.5)] text-black z-10 sticky top-0">
      {/* Logo */}
      <div className="text-xl font-bold">
        <NavLink to="/">📘 MyLibrary</NavLink>
      </div>

      {/* Navigation Links */}
      <div className="space-x-6 text-base font-medium flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center mr-4 md:mr-7 hover:bg-amber-200 p-0 md:p-3 rounded ${isActive ? "font-bold underline bg-amber-300 p-3 rounded" : ""}`
          }
        >
          <span className="mr-1">
            <FaHome />
          </span>
          <span className="md:block hidden">Home</span>
        </NavLink>

        <NavLink
          to="/browse"
          className={({ isActive }) =>
            `flex items-center mr-2 md:mr-7  hover:bg-amber-200 p-0 md:p-3 rounded ${isActive ? "font-bold underline bg-amber-300 p-3 rounded" : ""}`
          }
        >
          <span className="mr-1">
            <FaBook />
          </span>
          <span className="md:block hidden">Browse Books</span>
        </NavLink>

        <NavLink
          to="/addbook"
          className={({ isActive }) =>
            `flex items-center mr-2 md:mr-7  hover:bg-amber-200 p-0 md:p-3 rounded ${isActive ? "font-bold underline bg-amber-300 p-3 rounded" : ""}`
          }
        >
          <span className="mr-1">
            <IoMdAdd />
          </span>
          <span className="md:block hidden">Add Book</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
