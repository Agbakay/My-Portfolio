import React from "react";

const Pricing = () => {
  return (
    <div className="lg:px-[10%] py-28 px-5">
      <div>
        <div className="row lg:flex gap-020 justify-between items-center mb-10">
          <div className="basis-[30%]">
            <h1 className="lg:text-5xl text-3xl font-semibold">
              Clear & Simple <span className="thin">Pricing Plans</span>
            </h1>
          </div>
          <div className="basis-[60%]">
            <p>
              I offer an exclusive access to design and Website services. I
              focus on creating a personalized experience for each member,
              building strong partnerships and ensuring dedicated attention to
              your needs.
            </p>
          </div>
        </div>

        {/* Price Grid */}

        <div className="lg:grid grid-cols-3 gap-10">
          <div className="p-10 border-2 border-gray-100 rounded-3xl col-span-1 m-5 lg:m-0">
            <h1 className="text-3xl lg:text-5xl font-semibold mb-10">Lite</h1>
            <p>
              Specifically tailored for small businesses or individuals who
              require periodic website updates or maintenance.
            </p>

            <p className="text-7xl font-semibold mt-5">$1,000</p>
            <ul className="mt-28 mb-10">
              <li className="!text-black">
                <i className="fa-solid fa-splotch"></i> Website design tasks
              </li>
              <li className="!text-black">
                <i className="fa-solid fa-splotch"></i> CMS development
              </li>
              <li className="!text-black">
                <i className="fa-solid fa-splotch"></i> 24-48 hours turnaround
              </li>
              <li className="!text-black">
                <i className="fa-solid fa-splotch"></i> 5 web page
              </li>
              <li className="!text-black">
                <i className="fa-solid fa-splotch"></i> Website design tasks
              </li>
            </ul>

            <a href="/contact" className="button btn-main">
              Book a Call <i className="fa-solid fa-arrow-right icon-dark"></i>
            </a>
          </div>

          <div className="p-10 bg-gray-100 rounded-3xl col-span-1 m-5 lg:m-0">
            <h1 className="text-3xl lg:text-5xl font-semibold mb-10">Max</h1>
            <p>
              Caters to businesses seeking extensive support, handling of large
              task volumes, and regular website updates.
            </p>

            <p className="text-7xl font-semibold mt-5">$1,999</p>
            <ul className="mt-28 mb-10">
              <li className="!text-black">
                <i className="fa-solid fa-splotch"></i> Website design tasks
              </li>
              <li className="!text-black">
                <i className="fa-solid fa-splotch"></i> Website development
              </li>
              <li className="!text-black">
                <i className="fa-solid fa-splotch"></i> 48 - 72 hours turnaround
              </li>
              <li className="!text-black">
                <i className="fa-solid fa-splotch"></i> 10 web page
              </li>
              <li className="!text-black">
                <i className="fa-solid fa-splotch"></i> Website design tasks
              </li>
            </ul>

            <a href="/contact" className="button btn-main">
              Book a Call <i className="fa-solid fa-arrow-right icon-dark"></i>
            </a>
          </div>

          <div className="border-2 border-gray-100 rounded-3xl p-10 m-5 lg:m-0 ">
            <h1 className="text-3xl font-semibold mb-10">
              Basic Website Support
            </h1>
            <p>
              Website Maintenance service at Benefit from 10 dedicated hours
              each month for unlimited changes to existing pages & content,
              keeping your website updated and engaging.
            </p>

            <p className="text-6xl font-semibold mt-5 mb-52">$499</p>

            <a href="/contact" className="button btn-main">
              Book a Call <i className="fa-solid fa-arrow-right icon-dark"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
