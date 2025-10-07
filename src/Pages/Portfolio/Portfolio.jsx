import React from "react";

const Portfolio = () => {
  return (
    <div className=" ">
      {/* Hero Section */}
      <div className="px-5 lg:px-[8%]">
        <div className="pt-52 pb-20">
          <h1 className="text-sm uppercase mb-10">
            <span className="mr-2">HOMEPAGE</span> /{" "}
            <span className="font-light text-gray-300 ml-2"> PORTFOLIO</span>
          </h1>

          <h1 className=" sm:text-7xl font-bold mb-10 sm:w-2xl w-full text-5xl sm:leading-[95px] leading-[75px] ">
            Designing <span className="font-thin">a Better</span> World{" "}
            <span className="font-thin">Today</span>
          </h1>

          <a href="">
            Our Works <i className="fa-solid fa-arrow-down icon-dark"></i>
          </a>
        </div>
      </div>

      {/* Portfolio Section */}

      <div className="px-5 lg:px-[8%]">
        <div>
          <div className="">
            <div className="image h-[400px] border-2 overflow-hidden  ">
              <div className=" bg-amber-300 h-[400px] overflow-hidden hover:scale-[1.01]"></div>
            </div>
            <div className="tex my-10">
              <h1 className="text-3xl font-semibold mb-5">
                Wordpress Website Design
              </h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                a maxime atque sint repellendus molestiae possimus fugit
                nesciunt ut! Nihil, quod. Tenetur deleniti tempore, sequi
                explicabo modi hic laborum dignissimos.
              </p>

              <a href="#" className="font-semibold">
                VIEW PROJECT{" "}
                <i className="fa-solid fa-arrow-right icon-light"></i>
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
