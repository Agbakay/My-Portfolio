import React from "react";
import image from "../assets/img03.jpg";

const Services = () => {
  return (
    <div className="bg-black text-white lg:px-[8%] px-[20px] pt-32 ">
      <div>
        <div className="text-right  pt-20 mb-16">
          <p>
            Professionals focused on helping your brand grow and move forward.{" "}
          </p>
        </div>
        <div className=" flex-col flex  text-center gap-10 items-center justify-center">
          <div className="sm:flex gap-10">
            <span className="hidden sm:block">
              <img
                src={image}
                alt=""
                className="w-50 object-top object-cover h-20 rounded-full"
              />
            </span>
            <h1 className="text-7xl font-semibold">
              Unique <span className="thin">Ideas</span>
            </h1>
          </div>
          <div className="sm:flex gap-10">
            <h1 className="text-7xl font-semibold">
              For Your <span className="thin">Business.</span>
            </h1>
            <button className="btn-main mt-10 sm:mt-0">
              What we do <i className="fa-solid fa-arrow-right icon-dark"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="pt-20 sm:flex relative overflow-hidden">
        <div className="border-l-1 border-t-1 border-gray-800 border-r-1 sm:border-r-0 col0 col">
          <div className=" py-[60px] px-[30px] ">
            <h1 className="text-2xl font-semibold mb-8">Website Design</h1>
            <p className="mb-8 opacity-0 hover:opacity-100 text-[16px] transition delay-100 duration-1000 ">
              Our creative agency is a team of professionals focused on helping
              your
            </p>
            <a href="#">
              <i className="fa-solid fa-arrow-right icon-light icon  bg-amber-600 text-white hover:text-white"></i>
            </a>
          </div>
        </div>
        <div className="border-l-1 border-t-1 border-gray-800 col1 col overflow-hidden border-r-1 sm:border-r-0">
          <div className=" py-[60px] px-[30px]">
            <h1 className="text-2xl font-semibold mb-8">Website Development</h1>
            <p className="mb-8 opacity-0 hover:opacity-100 text-[16px] transition delay-100 duration-1000 ">
              Our creative agency is a team of professionals focused on helping
              your
            </p>
            <a href="#">
              <i className="fa-solid fa-arrow-right icon-light icon  bg-amber-600 text-white hover:text-white"></i>
            </a>
          </div>
        </div>
        <div className="border-l-1 border-t-1 border-gray-800 col2 col border-r-1 sm:border-r-0">
          <div className=" py-[60px] px-[30px]">
            <h1 className="text-2xl font-semibold mb-8">
              Speed Optimazation & SEO
            </h1>
            <p className="mb-8 opacity-0 hover:opacity-100 text-[16px] transition delay-100 duration-1000 ">
              Our creative agency is a team of professionals focused on helping
              your
            </p>
            <a href="#">
              <i className="fa-solid fa-arrow-right icon-light icon  bg-amber-600 text-white hover:text-white"></i>
            </a>
          </div>
        </div>
        <div className="border-l-1 border-t-1 border-gray-800 border-r-1 col3 col  ">
          <div className=" py-[60px] px-[30px]">
            <h1 className="text-2xl font-semibold mb-8">
              Website Mainteance & Support
            </h1>
            <p className="mb-8 opacity-0 hover:opacity-100 text-[16px] transition delay-100 duration-1000 ">
              Our creative agency is a team of professionals focused on helping
              your
            </p>
            <a href="#">
              <i className="fa-solid fa-arrow-right icon-light icon  bg-amber-600 text-white hover:text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
