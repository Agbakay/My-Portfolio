import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-black pt-20 px-5 lg:px-[10%]">
      <div>
        <div className="lg:flex justify-between py-10">
          <div className="basis-[30%]">
            <img src="" alt="" />
            <h3 className="mb-5">Tagline</h3>
            <p className="text-gray-400">
              My journey into technology was driven by a passion for solving
              problems and creating things that people love to use. For me, a
              website is more than just code—it's the digital home for a great
              idea.
            </p>
          </div>
          <div className="lg:my-0 my-10">
            <h1 className="text-3xl mb-10">Links</h1>
            <ul>
              <li className="text-lg mb-3">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="text-lg mb-3">
                <NavLink to={"/portfolio"}>Portfolio</NavLink>
              </li>
              {/* <li className="text-lg mb-3">
                <NavLink to={"/services"}>Services</NavLink>
              </li> */}
              <li className="text-lg mb-3">
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="mb-10">
            <h1 className="text-3xl">Socials</h1>
            <div className="socials mt-5 gap-6 flex">
              <a href="">
                <i className="fa-brands fa-facebook-f text-3xl text-white"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-x-twitter text-3xl  text-white"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin text-3xl text-white "></i>
              </a>
              <a href="">
                <i className="fa-brands fa-instagram text-3xl  text-white"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-whatsapp text-3xl text-white"></i>
              </a>
            </div>
            <div></div>
          </div>
        </div>
        <div className="py-5  border-t border-gray-700">
          {/* <hr className="bg-gray-300 text-gray-100" /> */}
          <p className="text-white">© Copyright 2025 - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
