import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Services from "../../components/Services";
import Review from "../../components/Review";
import Pricing from "../../components/Pricing";

const Home = () => {
  return (
    <div className="">
      <div className="fixed  bottom-20">
        <h1 className="font-semibold text-md rotate-90 text-orange-400">
          HOMEPAGE
        </h1>
      </div>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Review />
    </div>
  );
};

export default Home;
