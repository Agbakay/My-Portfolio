import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Services from "../../components/Services";
import Review from "../../components/Review";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Review />
    </div>
  );
};

export default Home;
