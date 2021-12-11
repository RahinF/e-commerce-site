import React from "react";
import Categories from "../components/Categories/Categories";
import Slider from "../components/Slider/Slider";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products/Products";

import { Content } from "../responsive";

const Home = () => {
  return (
    <>
      <Slider />

      <Content>
        <h3>Latest Arrivals</h3>
        <Products latest />
      </Content>

      <Categories />

      
      
      <Newsletter />
    </>
  );
};

export default Home;
