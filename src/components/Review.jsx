import React from "react";

const Review = () => {
  return (
    <div className="lg:px-[8%] px-[5%] text-black bg-gray-100 py-32">
      <div className="text-center">
        <p className="leading-[20px] text-right mb-20 text-gray-500 ">
          Customer reviews are a valuable source of information for both
          businesses and consumers.
        </p>
        <h1 className="text-4xl sm:text-7x1 font-semibold mb-3">
          Customer <span className="thin">Voices:</span> Hear
        </h1>
        <h1 className="text-4xl sm:text-7xl font-semibold">
          What <span className="thin">They Say!</span>
          <p></p>
        </h1>
      </div>
      <div className="lg:flex justify-center items-center gap-10 mt-10 ">
        <div className="mt-10 sm:mt-0 shadow-md p-10">
          <i className="fa-solid fa-quote-left text-yellow-600 text-5xl"></i>
          <h1 className=" mb-4 mt-2 text-2xl">Customer Name</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam magni
            aperiam libero mollitia iure quae dolorem natus similique
            perferendis autem commodi, repellat velit laborum blanditiis
            reprehenderit aspernatur? Fuga, officia dolor.
          </p>
        </div>
        <div className="mt-10 sm:mt-0 shadow-md p-10">
          <i className="fa-solid fa-quote-left text-yellow-600 text-5xl"></i>
          <h1 className=" mb-4 mt-2  text-2xl">Customer Name</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam magni
            aperiam libero mollitia iure quae dolorem natus similique
            perferendis autem commodi, repellat velit laborum blanditiis
            reprehenderit aspernatur? Fuga, officia dolor.
          </p>
        </div>
        <div className="mt-10 sm:mt-0 shadow-md p-10">
          <i className="fa-solid fa-quote-left text-yellow-600 text-5xl"></i>
          <h1 className=" mb-4 mt-2  text-2xl">Customer Name</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam magni
            aperiam libero mollitia iure quae dolorem natus similique
            perferendis autem commodi, repellat velit laborum blanditiis
            reprehenderit aspernatur? Fuga, officia dolor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
