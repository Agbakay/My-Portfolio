import React from "react";
import image from "../assets/img01.jpg";
import image1 from "../assets/img02.jpg";

const About = () => {
  return (
    <div className="py-[100px] px-[2%] lg:px-[8%] text-black sm:flex gap-20  w-full mt-20">
      <div className="sm:w-[600px] basis-1/2">
        <h1 className="text-7xl text-black font-semibold pt-10 ">
          Discover Our <span className="thin">Studio</span>
        </h1>
        <p className="pt-20 sm:w-[450px] font-light">
          I'm Akintunde kayode, a web developer originally from the vibrant city
          of Lagos, Nigeria. My journey into technology was driven by a passion
          for solving problems and creating things that people love to use. For
          me, a website is more than just code—it's the digital home for a great
          idea.
        </p>
        <p className="pt-10 sm:w-[450px] w-full font-light">
          I specialize in building bridges between businesses and their
          customers. I do this by combining the art of design with the logic of
          programming. I listen carefully to your vision and then bring it to
          life, using the best technology for your specific needs.
        </p>
        <p className="font-light mt-10 sm:w-[450px]">
          My approach is flexible. I harness the speed and power of no-code
          platforms for projects that need to move fast, while diving deep into
          custom code with HTML, CSS, JavaScript, and React.js for the complex
          features that make your project truly unique. My ultimate goal is to
          build a website for you that is not only beautiful and easy to use but
          also helps you grow. Let's build something amazing together.
        </p>
        <div className="quote pt-20 flex gap-10 items-center">
          <div>
            <img src={image} alt="" className=" rounded-full  w-20 h-20" />
          </div>
          <div>
            <h1 className="font-semibold">
              Passionately Creating
              <span className="thin"> Design Wonders</span>
            </h1>
            <h1 className="font-semibold">
              Unleasing
              <span className="thin"> Boundless Creativity</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="pt-10 sm:pt-0  basis-1/2 ">
        <img
          src={image1}
          width={500}
          alt=""
          className="object-cover object-top hover:scale-0 transition-icon"
        />
      </div>
    </div>
  );
};

export default About;
