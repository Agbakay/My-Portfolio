import React from "react";

const Hero = () => {
  return (
    <div className="bg-black sm:h-screen h-screen w-full gap-20 sm:flex justify-between items-end flex px-[20px] lg:px-[8%]">
      <div className="sm:basis-1/2 mb-20">
        <h1 className="sm:text-7xl font-bold mb-10 sm:w-2xl w-full text-5xl sm:leading-[95px] leading-[75px] ">
          Designing <span className="font-thin">a Better</span> World{" "}
          <span className="font-thin">Today</span>
        </h1>
        <p className="text-gray-300 mb-20 w-full sm:w-[550px]">
          Welcome to our world of endless imagination and boundless creativity.
          Together, let's embark on a remarkable journey where dreams become
          tangible realities.
        </p>

        <div className="btn flex gap-10 ">
          <button className="btn-main">
            What I do <i class="fa-solid fa-arrow-right icon-dark"></i>
          </button>
          <button className="btn-transparent">
            View Project <i class="fa-solid fa-arrow-right icon-light"></i>
          </button>
        </div>
      </div>
      <div className="sm:basis-1/2 hidden ">scroll down animation</div>
    </div>
  );
};

export default Hero;
