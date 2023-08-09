import React from "react";
import NewArrival from "./NewArrival";
import TopBrands from "./TopBrands";
import NewProducts from "./NewProducts";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
  return (
    <div>
      <ShopByCategory/>
      <NewProducts/>
      <NewArrival />
      <TopBrands />
    </div>
  );
};

export default Home;
