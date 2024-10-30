import React from "react";
import { Link } from "react-router-dom"; // Ensure to import Link
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import shoes from "../assets/images/men/cat-shoes.jpg";
import clothing from "../assets/images/women/9-item-a.jpg";
import accessories from "../assets/images/accessories/a-5-a.jpg";
import gadgets from "../assets/images/gadgets/g-5-a.jpg"; 
import "../App.css";

const ShopByCategory = () => {
  const shopByC = [
    { id: 1, image: shoes, shopTitle: "Shoes", description: "1 product", path: "/shoes" },
    { id: 2, image: clothing, shopTitle: "Clothing", description: "9 products", path: "/womens" },
    { id: 3, image: accessories, shopTitle: "Accessories", description: "4 products", path: "/category" },
    { id: 4, image: gadgets, shopTitle: "Gadgets", description: "5 products", path: "/all-accessories" },
  ];

  return (
    <div className="shop-by-category">
      <div className="shop-category-title">
        <h3 className="shop-category-heading">Shop By Category</h3>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {shopByC.map((category) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={category.id}>
              <Card sx={{ maxWidth: "100%" }} className="shop-category-box">
                <Link to={category.path} className="shop-category-img">
                  <CardMedia component="img" image={category.image} alt={category.shopTitle} />
                </Link>
                <div className="iron-overlay-content d-flex align-items-end">
                  <div className="iron-overlay-holder">
                    <h6>{category.shopTitle}</h6>
                    {/* <p>{category.description}</p> */}
                  </div>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ShopByCategory;
