import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full relative bg-black">
      <div className="absolute w-full bg-black">
        <nav className="flex justify-between items-center lg:px-[8%] py-10">
          <div className="logo">
            <h1 className="text-white">Logo Here</h1>
          </div>
          <div>
            <ul className="flex gap-10">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/portfolio"}>Portfolio</NavLink>
              </li>
              {/* <li>
                <NavLink to={"/services"}>Services</NavLink>
              </li> */}
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
