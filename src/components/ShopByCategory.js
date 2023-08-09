import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// card
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
// images
import shoes from "../assets/images/men/cat-shoes.jpg";
import clothing from "../assets/images/women/9-item-a.jpg";
import accessories from "../assets/images/accessories/a-5-a.jpg";
import gadgets from "../assets/images/gadgets/g-5-a.jpg";

const ShopByCategory = () => {
  const shopByC = [
    {
      id: 1,
      image: shoes,
      shopTitle: "shoes",
      descrption: "1 products",
    },
    {
      id: 2,
      image: clothing,
      shopTitle: "clothing",
      descrption: "9 products",
    },
    {
      id: 3,
      image: accessories,
      shopTitle: "accessories",
      descrption: "4 products",
    },
    {
      id: 4,
      image: gadgets,
      shopTitle: "gadgets",
      descrption: "5 products",
    },


  ];

  return (
    <div className="shop-by-category">
        <div className="shop-category-tiltle">
            <h3>Shop By Category</h3>
        </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {shopByC.map((path) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={path.id} className="">
              <Card sx={{ maxWidth: "100%" }} className="shop-category-box">
                <Link href="#" className="shopcategry-img">
                  <CardMedia component="img" image={path.image} alt="shoes" />
                </Link>

                <div className="iron-overlay-content d-flex align-items-end">
                  <div className="iron-overlay-holder">
                    <h6>{path.shopTitle}</h6>

                    <p>{path.descrption}</p>
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
