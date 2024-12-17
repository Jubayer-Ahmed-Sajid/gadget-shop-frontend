import React from "react";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import UserDropDown from "../../userDropDown";

const NavBar = () => {
  const { user } = UseAuth();
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About us</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact us</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={'/'} className="lg:block hidden btn btn-ghost text-xl">Gadget Shop</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <UserDropDown></UserDropDown>
          ) : (
            <div>
              <Link to={"/login"} className="btn px-10 bg-gray-600 text-white">
                Login
              </Link>
              <Link
                to={"/registration"}
                className="btn ml-2 bg-gray-600 text-white"
              >
                Registration
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
