import React from "react";
import UseAuth from "../Hooks/UseAuth";
import icons from '../assets/blue-circle-with-white-user/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg'
import { Link } from "react-router-dom";

const UserDropDown = () => {
    const {user,logout} =UseAuth()
    const handleLogout=()=>{
        logout()
    }
  return (
    <div className="flex gap-4">
      <div className="dropdown">
        <div tabIndex={0} role="button" className=" m-1">
          <div className="avatar">
            <div className=" w-12 rounded-full ">
              <img src={`${user?.photoURL || icons}`} />
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <Link to="/dashboard/overview">Dashboard</Link>
          </li>
          <li>
            <a>Profile</a>
          </li>
        </ul>
      </div>
      <button onClick={handleLogout} className="btn">Logout</button>
    </div>
  );
};

export default UserDropDown;
