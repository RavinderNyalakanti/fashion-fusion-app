/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./productsDetails.css";
// import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
// import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";
import { PiCurrencyInrBold } from "react-icons/pi";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

/*react-icons*/ 
import {TiSocialFacebook } from "react-icons/ti";
import {AiOutlineTwitter } from "react-icons/ai";
import {AiOutlineGoogle } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";


/*avatat details */ 
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';



import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Button from '@mui/material/Button';
import Footer from "../../Footer";

const ProductsDetails = () => {
  const [age, setAge] = useState('')

  const handleChange = (event) => {
    setAge(event.target.value);
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
                    <li>&#x2022; Slim Fit</li>
                    <li>&#x2022; 100% Cotton</li>
                    <li>&#x2022; Free Shipping and delivery in 4 Days</li>
                  </ul>

                  <Grid container spacing={3}>
                    <Grid lg={4}>
                      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-standard-label">Color</InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={age}
                          onChange={handleChange}
                          label="Age"
                        >
                          <MenuItem value={10}>red</MenuItem>
                          <MenuItem value={20}>green</MenuItem>
                          <MenuItem value={30}>blue</MenuItem>
                          <MenuItem value={40}>yellow</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid lg={4}>
                      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-standard-label">Size</InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={age}
                          onChange={handleChange}
                          label="Age"
                        >

                          <MenuItem value={10}>36</MenuItem>
                          <MenuItem value={20}>38</MenuItem>
                          <MenuItem value={30}>40</MenuItem>
                          <MenuItem value={40}>42</MenuItem>
                          <MenuItem value={50}>44</MenuItem>
                          <MenuItem value={60}>46</MenuItem>
                          <MenuItem value={70}>48</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid lg={4}>
                      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-standard-label">Quantity</InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={age}
                          onChange={handleChange}
                          label="Age"
                        >

                          <MenuItem value={10}>1</MenuItem>
                          <MenuItem value={20}>2</MenuItem>
                          <MenuItem value={30}>3</MenuItem>
                          <MenuItem value={40}>4</MenuItem>
                          <MenuItem value={50}>5</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>


                </div>
                <a href='#' style={{ color: '#000' }}>Add To Wishlist</a>
                <div>
                  <Button style={{ marginRight: '20px', marginTop: '20px', textTransform: 'capitalize', backgroundColor: 'rgb(255, 87, 34)' }} size='large' variant="contained">View Cart</Button>
                  <Button style={{ marginTop: '20px', textTransform: 'capitalize', backgroundColor: '#fff', color: "#000" }} variant="contained" size='large'>Buy Now</Button>
                </div>
                <div className="product-details-avatar-main-container">
                  <p>Share Now</p>
                  <div className="product-details-avatar-inner-container" >
                    <Stack direction="row" spacing={1}>
                      <Avatar
                        sx={{ bgcolor:"#283593"}}
                        alt="Remy Sharp"
                        src="/broken-image.jpg" 
                        className="avatar-for-new-social-apps"
                      >
                        <TiSocialFacebook/>
                      </Avatar>
                      <Avatar
                        sx={{ bgcolor:"#283593"}}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps"
                      >
                        <AiOutlineTwitter/>
                      </Avatar>
                      <Avatar
                        sx={{ bgcolor: "#283593" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps"
                      >
                        <AiOutlineGoogle/>
                      </Avatar>
                      <Avatar
                        sx={{ bgcolor:"#283593" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps"
                      >
                        <TiSocialInstagram/>
                      </Avatar>
                      
                    
                    </Stack>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsDetails;
