import React from "react";
import "./productsDetails.css";
// import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
// import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";
import { PiCurrencyInrBold } from "react-icons/pi";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ProductsDetails = () => {

  const [Color, setColor] = React.useState('');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="products-details-section">
      <div className="contact-background-image-container">
        <h1>Prodcuts Details</h1>
      </div>

      <div className="products-details-box">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid lg={6} md={12} sm={12} sx={12}>
              <h1>xs=4</h1>
            </Grid>
            <Grid lg={6} md={12} sm={12} sx={12}>
              <div className="product-content-box">
                <div className="detail-content">
                  <Link href="#" className="text-14 d-inline-block mb-10">
                    Back to shop
                  </Link>
                  <h2>White T-Shirt</h2>

                  <Link href="#" className="addAReview">
                    Add A Review
                  </Link>
                  <h4 className="price">
                    <PiCurrencyInrBold className="inr_icons" />{" "}
                    <span>4789</span>
                  </h4>

                  <ul className="ul-tags">
                    <li>
                      <b className="tags">Availablity : </b> In Stocks
                    </li>
                    <li>
                      <b className="tags">Product Code : </b> #EM1208
                    </li>
                    <li>
                      <b className="tags">Tags : </b> White Graphic Women
                    </li>
                  </ul>

                  <p>
                    Sit amet consectetur, adipisicing elit. Distinctio aperiam
                    debitis ipsa veniam eos quas excepturi quae? Recusandae
                    distinctio nihil quia quis, eaque aspernatur perferendis
                    repudiandae adipisci labore, impedit beatae!
                  </p>

                  <ul className="ul-tags">
                    <li>Slim Fit</li>
                    <li>100% Cotton</li>
                    <li>Free Shipping and delivery in 4 Days</li>
                  </ul>

                  <Grid container spacing={2}>
                    <Grid lg={4} md={4} sm={12} sx={12}>

                    <FormControl variant="standard" sx={{ minWidth: 120 }} className="colors_btns">
                        <InputLabel id="demo-simple-select-standard-label">Color</InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          onChange={handleChange}
                          label="Color"
                        >
                          <MenuItem value="" > <em>None</em></MenuItem>
                          <MenuItem value={10}>Red</MenuItem>
                            <MenuItem value={21}>Green</MenuItem>
                            <MenuItem value={22}>Blue</MenuItem>
                        </Select>
                      </FormControl>
                        
                       

                    </Grid>
                    <Grid lg={4} md={4} sm={12} sx={12}>

                    <FormControl variant="standard" sx={{ minWidth: 120 }} className="colors_btns">
                        <InputLabel id="demo-simple-select-standard-label">Size</InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          onChange={handleChange}
                          label="Size"
                        >
                          <MenuItem value="" > <em>None</em></MenuItem>
                            <MenuItem value={10}>36</MenuItem>
                            <MenuItem value={21}>38</MenuItem>
                            <MenuItem value={22}>40</MenuItem>
                        </Select>
                      </FormControl>
                        
                        
                    </Grid>
                    <Grid lg={4} md={4} sm={12} sx={12}>
                        
                    <FormControl variant="standard" sx={{ minWidth: 120 }} className="colors_btns">
                        <InputLabel id="demo-simple-select-standard-label">Quantity</InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          onChange={handleChange}
                          label="Quantity"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                        </Select>
                      </FormControl>

                    </Grid>



                  </Grid>
                  <Link href="#">Add To Wishlist</Link>

                </div>
                <h1>xs=8</h1>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default ProductsDetails;
