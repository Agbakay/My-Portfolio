import React from "react";

import ddhq from "../../assets/ddhq.png";
import hcw from "../../assets/hcw.png";
import elit from "../../assets/elit.png";
import aixp from "../../assets/aixp.png";
import sow from "../../assets/sow.png";
import cfe from "../../assets/cfe.png";

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
            My Works <i className="fa-solid fa-arrow-down icon-dark"></i>
          </a>
        </div>
      </div>

      {/* Portfolio Section */}

      <div className="px-5 lg:px-[18%]">
        <div>
          <div className="">
            <div className="image h-[400px]  overflow-hidden  ">
              <div className="  h-[400px] overflow-hidden ">
                <img
                  src={ddhq}
                  alt=""
                  className="transition duration-500  ease-in-out hover:scale-[1.01] block m-auto w-full h-full object-top object-cover "
                />
              </div>
            </div>
            <div className="tex my-10">
              <h1 className="text-3xl font-semibold mb-5">
                Wordpress Website Design
              </h1>
              <h2 className="mb-4">About</h2>
              <p className="mb-5 lg:w-[600px] ">
                Detty December HQ is more than just an events platform. it’s
                your all-in-one lifestyle app designed to connect you with the
                best experiences, services, and partners all year round.
              </p>

              <a
                href="https://dettydecemberhq.com/"
                target="_blank"
                className="font-semibold text-gray-600"
              >
                Visit Website{" "}
                <i className="fa-solid fa-arrow-right icon-light"></i>
              </a>
            </div>
          </div>
          <div></div>
        </div>

        <div className=" lg:grid-cols-2 grid  gap-20">
          <div className="items">
            <div className="image h-[400px] w-full">
              <img
                src={hcw}
                alt=""
                className="transition duration-500  ease-in-out hover:scale-[1.01] block m-auto w-full h-full object-cover "
              />
            </div>
            <div className="tex my-10">
              <h1 className="text-3xl font-semibold mb-5">
                Houston Cigar Week
              </h1>
              <h2 className="mb-4">About</h2>
              <p className="mb-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                a maxime atque sint repellendus molestiae possimus fugit
                nesciunt ut! Nihil, quod. Tenetur deleniti tempore, sequi
                explicabo modi hic laborum dignissimos.
              </p>

              <a
                href="https://www.houstoncigarweek.com/"
                target="_blank"
                className="font-semibold text-gray-600"
              >
                Visit Website{" "}
                <i className="fa-solid fa-arrow-right icon-light"></i>
              </a>
            </div>
          </div>
          <div className="items">
            <div className="image h-[400px] ">
              <img
                src={elit}
                alt=""
                className="transition duration-500  ease-in-out hover:scale-[1.01] block m-auto w-full h-full object-cover "
              />
            </div>
            <div className="tex my-10">
              <h1 className="text-3xl font-semibold mb-5">
                Elitshine Cleaning Website
              </h1>
              <h2 className="mb-4">About</h2>

              <p className="mb-5  ">
                Relax and leave the cleaning to us. Whether it’s a fresh start
                at home or a comprehensive clean-up after a move or
                construction, we promise a sparkling finish every time.
              </p>

              <a
                href="https://elitshine.co.uk/"
                target="_blankc:\Users\Victo\Pictures\Screenshots\aixp.png"
                className="font-semibold text-gray-600"
              >
                Visit Website{" "}
                <i className="fa-solid fa-arrow-right icon-light"></i>
              </a>
            </div>
          </div>
          <div className="items lg:col-span-2">
            <div className="image h-[400px] bg-amber-400">
              <img
                src={aixp}
                alt=""
                className="w-full h-full object-cover hover:scale-[1.01] duration-500 transition"
              />
            </div>
            <div className="tex my-10">
              <h1 className="text-3xl font-semibold mb-5">
                Wordpress Website Design
              </h1>
              <h3 className="text-lg font-bold mb-2">About</h3>
              <p className="mb-5 w-[600px] ">
                AIxP fuses breakthrough tech, creator energy, and real-world
                solutions. This is more than a conference—it’s where coders,
                founders, and culture-shifters connect to reimagine what’s
                possible with AI. Expect deep learning, bold conversations, and
                vibes all weekend.
              </p>

              <a
                href="https://theaixp.com/"
                target="_blank"
                className="font-semibold text-gray-600"
              >
                Visit Website{" "}
                <i className="fa-solid fa-arrow-right icon-light"></i>
              </a>
            </div>
          </div>
          <div className="items ">
            <div className="image h-[400px] bg-amber-400">
              <img
                src={sow}
                alt=""
                className="w-full h-full transition duration-500 ease-in-out object-cover hover:scale-[1.01]"
              />
            </div>
            <div className="tex my-10">
              <h1 className="text-3xl font-semibold mb-5">School of Wife</h1>
              <h2 className="mb-4">About</h2>

              <p className="mb-5  ">
                The School of Wife: High-Achieving Women Edition launches Early
                2026! If you’re not a physician but are a high-achieving
                professional woman (or know someone who is),
              </p>

              <a
                href="https://schoolofwife.com/sales-page/"
                target="_blank"
                className="font-semibold text-gray-600"
              >
                Visit Website{" "}
                <i className="fa-solid fa-arrow-right icon-light"></i>
              </a>
            </div>
          </div>
          <div className="items">
            <div className="image h-[400px] bg-amber-400">
              <img
                src={cfe}
                className="w-full h-full block m-auto object-cover hover:scale-[1.01] duration-500 transition"
              />
            </div>
            <div className="tex my-10">
              <h1 className="text-3xl font-semibold mb-5">Certified Energy</h1>
              <h2 className="mb-4">About</h2>
              <p className="mb-5 ">
                Certified Energy NA was founded in 2012 with one clear purpose —
                to make energy simple, affordable, and accessible for everyone
                in Texas. As a member of TEPA (The Energy Professionals
                Association), we operate with honesty, transparency, and a
                commitment to helping our customers find the best solutions for
                their homes and businesses.
              </p>

              <a
                href="https://certifiedenergyna.com/"
                target="_blank"
                className="font-semibold text-gray-600"
              >
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
            Ready to bring your <span className="thin">ideas to</span> life?
          </h1>
          <h1 className="text-5xl font-semibold mb-10">
            I'm <span className="thin">here to help</span>{" "}
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
