import React from "react";
import Categories from "../components/Categories/Categories";
import Slider from "../components/Slider/Slider";
import { slides } from "../components/Slider/data";
import Products from "../components/Products/Products";

const Home = () => {
  return (
    <>
      <Slider slides={slides} />

      <h3>Latest Arrivals</h3>
      <Products latest />

      <Categories />
    </>
  );
};

export default Home;
