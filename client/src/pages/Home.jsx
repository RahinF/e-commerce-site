import React from "react";
import Categories from "../components/Categories/Categories";
import Slider from "../components/Slider/Slider";
import Newsletter from "../components/Newsletter";


const Home = () => {
  return (
    <>
      <Slider />
      <Categories/>
      <Newsletter />
    </>
  );
};

export default Home;
