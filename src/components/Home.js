import React from "react";
import NewArrival from "./NewArrival";
import TopBrands from "./TopBrands";
import NewProducts from "./NewProducts";

const Home = () => {
  return (
    <div>
      <NewProducts/>
      <NewArrival />
      <TopBrands />
    </div>
  );
};

export default Home;
