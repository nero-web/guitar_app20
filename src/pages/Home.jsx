/** @format */

import Hero from "../components/Hero";
import Offerings from "../components/Offerings";
import Chrisbio from "../components/Chrisbio";
import FeaturedVideos from "../components/FeaturedVideos";
import Testimonials from "../components/Testimonials";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <Offerings />
      <Chrisbio />
      <FeaturedVideos />
      <Testimonials />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Home;
