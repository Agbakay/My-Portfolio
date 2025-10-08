import React from "react";

const Portfolio = () => {
  return (
    <div className=" ">
      {/* Hero Section */}
      <div className="px-5 lg:px-[18%]">
        <div className="pt-52 pb-36">
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

      <div className="px-5 lg:px-[18%]">
        <div>
          <div className="">
            <div className="image h-[400px]  overflow-hidden  ">
              <div className=" bg-amber-300 h-[400px] overflow-hidden hover:scale-[1.01]">
                1
              </div>
            </div>
            <div className="tex my-10">
              <h1 className="text-3xl font-semibold mb-5">
                Wordpress Website Design
              </h1>
              <p className="mb-5  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                a maxime atque sint repellendus molestiae possimus fugit
                nesciunt ut! Nihil, quod. Tenetur deleniti tempore, sequi
                explicabo modi hic laborum dignissimos.
              </p>

              <a href="#" className="font-semibold text-gray-600">
                Visit Website{" "}
                <i className="fa-solid fa-arrow-right icon-light"></i>
              </a>
            </div>
          </div>
          <div></div>
        </div>

        <div className=" lg:grid-cols-2 grid  gap-20">
          <div className="items">
            <div className="image h-[400px] bg-amber-400"></div>
            <div className="tex my-10">
              <h1 className="text-3xl font-semibold mb-5">
                Wordpress Website Design
              </h1>
              <p className="mb-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                a maxime atque sint repellendus molestiae possimus fugit
                nesciunt ut! Nihil, quod. Tenetur deleniti tempore, sequi
                explicabo modi hic laborum dignissimos.
              </p>

              <a href="#" className="font-semibold text-gray-600">
                Visit Website{" "}
                <i className="fa-solid fa-arrow-right icon-light"></i>
              </a>
            </div>
          </div>
          <div className="items">
            <div className="image h-[400px] bg-amber-400">2</div>
            <div className="tex my-10">
              <h1 className="text-3xl font-semibold mb-5">
                Wordpress Website Design
              </h1>
              <p className="mb-5  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                a maxime atque sint repellendus molestiae possimus fugit
                nesciunt ut! Nihil, quod. Tenetur deleniti tempore, sequi
                explicabo modi hic laborum dignissimos.
              </p>

              <a href="#" className="font-semibold text-gray-600">
                Visit Website{" "}
                <i className="fa-solid fa-arrow-right icon-light"></i>
              </a>
            </div>
          </div>
          <div className="items lg:col-span-2">
            <div className="image h-[400px] bg-amber-400">3</div>
            <div className="tex my-10">
              <h1 className="text-3xl font-semibold mb-5">
                Wordpress Website Design
              </h1>
              <p className="mb-5  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                a maxime atque sint repellendus molestiae possimus fugit
                nesciunt ut! Nihil, quod. Tenetur deleniti tempore, sequi
                explicabo modi hic laborum dignissimos.
              </p>

              <a href="#" className="font-semibold text-gray-600">
                Visit Website{" "}
                <i className="fa-solid fa-arrow-right icon-light"></i>
              </a>
            </div>
          </div>
          <div className="items ">
            <div className="image h-[400px] bg-amber-400">4</div>
            <div className="tex my-10">
              <h1 className="text-3xl font-semibold mb-5">
                Wordpress Website Design
              </h1>
              <p className="mb-5  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                a maxime atque sint repellendus molestiae possimus fugit
                nesciunt ut! Nihil, quod. Tenetur deleniti tempore, sequi
                explicabo modi hic laborum dignissimos.
              </p>

              <a href="#" className="font-semibold text-gray-600">
                Visit Website{" "}
                <i className="fa-solid fa-arrow-right icon-light"></i>
              </a>
            </div>
          </div>
          <div className="items">
            <div className="image h-[400px] bg-amber-400">5</div>
            <div className="tex my-10">
              <h1 className="text-3xl font-semibold mb-5">
                Wordpress Website Design
              </h1>
              <p className="mb-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                a maxime atque sint repellendus molestiae possimus fugit
                nesciunt ut! Nihil, quod. Tenetur deleniti tempore, sequi
                explicabo modi hic laborum dignissimos.
              </p>

              <a href="#" className="font-semibold text-gray-600">
                Visit Website{" "}
                <i className="fa-solid fa-arrow-right icon-light"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact me */}

      <div className="px-5 lg:px-[18%] py-30 bg-gray-100 mt-26">
        <div className="mb-20">
          <p className="text-right text-gray-500 font-light ">
            Looking to make your mark? We'll help you turn
            <br />
            your project into a success story.
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-semibold mb-3">
            Ready to bring your<span className="thin">ideas to</span> life?
          </h1>
          <h1 className="text-5xl font-semibold mb-10">
            We're <span className="thin">here to help</span>{" "}
          </h1>
          <button className="btn-main">
            What I do <i className="fa-solid fa-arrow-right icon-dark"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
