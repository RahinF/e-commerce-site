import React from "react";
import Categories from "../components/Categories/Categories";
import Slider from "../components/Slider/Slider";

import Products from "../components/Products/Products";

const Home = () => {
  return (
    <>
      <Slider />

      <h3>Latest Arrivals</h3>
      <Products latest />

      <Categories />
    </>
  );
};

export default Home;
