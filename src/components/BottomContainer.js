import React from "react";
import NewArrival from "./NewArrival";
import TopBrands from "./TopBrands";
import NewProducts from "./NewProducts";
import ShopByCategory from "./ShopByCategory";
import Footer from './Footer'
const BottomContainer = () => {
  return (
    <div>
      <ShopByCategory/>
      <NewProducts/>
      <NewArrival />
      <TopBrands />  
      <Footer/>
    </div>
  );
};

export default BottomContainer
