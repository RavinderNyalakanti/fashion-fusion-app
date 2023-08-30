/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"; 
import {Link} from 'react-router-dom'
import "./productsDetails.css";

// eslint-disable-next-line no-unused-vars


// import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
// import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Unstable_Grid2";
// import Link from "@mui/material/Link";
import { PiCurrencyInrBold } from "react-icons/pi";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

/*react-icons*/
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import { AiFillHeart } from "react-icons/ai";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


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

/*images for thumbnile */
import thumbnile1 from '../../../assets/thumbnileImages/9-item-b.05b1d5e2.jpg'
import thumbnile2 from '../../../assets/thumbnileImages/9-item-c.6686ffe4.jpg'
import thumbnile3 from '../../../assets/thumbnileImages/9-item-d.c823c471.jpg'
import thumbnile4 from '../../../assets/thumbnileImages/9-item-e.2ca6641f.jpg'
import mainImage from '../../../assets/thumbnileImages/9-item-a.jpg'

import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'trasparent' ? 'transparent' : 'transparent',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// })); 

/*card styles */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';


/*women images */

import womenImage1 from '../../../assets/images/women/6-item-a.jpg'
import womenImage2 from '../../../assets/images/women/7-item-a.jpg'
import womenImage3 from '../../../assets/images/women/8-item-a.jpg'
import womenImage4 from '../../../assets/images/women/9-item-a.jpg'

import womenredmainimage from '../../../assets/womenredstrips/6-item-a.1459ebf4.jpg'
import womenred1 from '../../../assets/womenredstrips/6-item-b.20ac7206.jpg'
import womenred2 from '../../../assets/womenredstrips/6-item-c.3ed07efd.jpg'
import womenred3 from '../../../assets/womenredstrips/6-item-d.714d63b0.jpg'
import womenred4 from '../../../assets/womenredstrips/6-item-e.aa1ef5df.jpg'

import womenbluemainimage from '../../../assets/womenbluestrips/7-item-a.674dc964.jpg' 
import womenblue1 from '../../../assets/womenbluestrips/7-item-b.917e7bd2.jpg'
import womenblue2 from '../../../assets/womenbluestrips/7-item-c.6aa21356.jpg'
import womenblue3 from '../../../assets/womenbluestrips/7-item-d.183eeb34.jpg'
import womenblue4 from '../../../assets/womenbluestrips/7-item-e.424a4267.jpg'

import womenblackmainimage from '../../../assets/womenblackdress/8-item-a.b9a10876.jpg' 
import womenblack1 from '../../../assets/womenblackdress/8-item-b.3917b8d8.jpg'
import womenblack2 from '../../../assets/womenblackdress/8-item-c.2bf19647.jpg'
import womenblack3 from '../../../assets/womenblackdress/8-item-d.ff101377.jpg'
import womenblack4 from '../../../assets/womenblackdress/download.jpeg'

/*start icons*/
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const ProductsDetails = () => {
  const [age, setAge] = useState('')

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [currentImage, setMainImage] = useState(mainImage);
  const handleThumbnailHover = (imagePath) => {
    setMainImage(imagePath);
  };

  const [currentImageRed, setMainImageRed] = useState(womenredmainimage);
  const handleThumbnailHoverRed = (imagePath) => {
    setMainImageRed(imagePath);
  };
 
  const [currentImageBlue, setMainImageBlue] =useState(womenbluemainimage);
  const handleThumbnailHoverBlue = (imagePath) => {
    setMainImageBlue(imagePath);
  };
 
  const [currentImageBlack, setMainImageBlack] = useState(womenblackmainimage);
  const handleThumbnailHoverBlack = (imagePath) => {
    setMainImageBlack(imagePath);
  };
 

  const value = 3.5;
  




  return (
    <div className="products-details-section">
      <div className="contact-background-image-container">
        <h1>Prodcuts Details</h1>
      </div>
     
      <div className="products-details-box">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid lg={6} md={12} sm={12} sx={12}>
              <div className="product-images">
                <div className="thumbnail-images">
                  <img
                    className="thumbnail"
                    src={thumbnile1}
                    alt="Thumbnail 1"
                    // eslint-disable-next-line no-undef
                    onMouseOver={() => handleThumbnailHover(thumbnile1)}
                  />

                  <img
                    className="thumbnail"
                    src={thumbnile2}
                    alt="Thumbnail 2"
                    // eslint-disable-next-line no-undef
                    onMouseOver={() => handleThumbnailHover(thumbnile2)}
                  />

                  <img
                    className="thumbnail"
                    src={thumbnile3}
                    alt="Thumbnail 3"
                    // eslint-disable-next-line no-undef
                    onMouseOver={() => handleThumbnailHover(thumbnile3)}
                  />

                  <img
                    className="thumbnail"
                    src={thumbnile4}
                    alt="Thumbnail 4"
                    onMouseOver={() => handleThumbnailHover(thumbnile4)}
                  />

                </div>

                <div className="main-image">
                  <img src={currentImage} alt="Main Product Image" />
                </div>
              </div>
            </Grid>



            <Grid lg={6} md={12} sm={12} sx={12}>
              <div className="product-content-box">
                <div className="detail-content">
                  <Link to='/' className="text-14 d-inline-block mb-10">
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
                    <Grid lg={4} sm={4} md={4}>
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
                    <Grid lg={4} sm={4} md={4} >
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
                    <Grid lg={4} sm={4} md={4}>
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
                        sx={{ bgcolor: "#283593" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps"
                      >
                        <TiSocialFacebook />
                      </Avatar>
                      <Avatar
                        sx={{ bgcolor: "#283593" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps"
                      >
                        <AiOutlineTwitter />
                      </Avatar>
                      <Avatar
                        sx={{ bgcolor: "#283593" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps"
                      >
                        <AiOutlineGoogle />
                      </Avatar>
                      <Avatar
                        sx={{ bgcolor: "#283593" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps"
                      >
                        <TiSocialInstagram />
                      </Avatar>


                    </Stack>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div className="products-details-box">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid lg={6} md={12} sm={12} sx={12}>
              <div className="product-images">
                <div className="thumbnail-images">
                  <img
                    className="thumbnail"
                    src={womenred1 }
                    alt="Thumbnail 1"
                    // eslint-disable-next-line no-undef
                    onMouseOver={() => handleThumbnailHoverRed(womenred1 )}
                  />

                  <img
                    className="thumbnail"
                    src={womenred2}
                    alt="Thumbnail 2"
                    // eslint-disable-next-line no-undef
                    onMouseOver={() => handleThumbnailHoverRed(womenred2)}
                  />

                  <img
                    className="thumbnail"
                    src={womenred3}
                    alt="Thumbnail 3"
                    // eslint-disable-next-line no-undef
                    onMouseOver={() => handleThumbnailHoverRed(womenred3)}
                  />

                  <img
                    className="thumbnail"
                    src={womenred4}
                    alt="Thumbnail 4"
                    onMouseOver={() => handleThumbnailHoverRed(womenred4)}
                  />

                </div>

                <div className="main-image">
                  <img src={currentImageRed} alt="Main Product Image" />
                </div>
              </div>
            </Grid>



            <Grid lg={6} md={12} sm={12} sx={12}>
              <div className="product-content-box">
                <div className="detail-content">
                  <Link to='/' className="text-14 d-inline-block mb-10">
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
                    <Grid lg={4} sm={4} md={4}>
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
                    <Grid lg={4} sm={4} md={4} >
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
                    <Grid lg={4} sm={4} md={4}>
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
                        sx={{ bgcolor: "#283593" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps"
                      >
                        <TiSocialFacebook />
                      </Avatar>
                      <Avatar
                        sx={{ bgcolor: "#283593" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps"
                      >
                        <AiOutlineTwitter />
                      </Avatar>
                      <Avatar
                        sx={{ bgcolor: "#283593" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps"
                      >
                        <AiOutlineGoogle />
                      </Avatar>
                      <Avatar
                        sx={{ bgcolor: "#283593" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps"
                      >
                        <TiSocialInstagram />
                      </Avatar>


                    </Stack>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div className="products-details-box">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid lg={6} md={12} sm={12} sx={12}>
              <div className="product-images">
                <div className="thumbnail-images">
                  <img
                    className="thumbnail"
                    src={womenblue1}
                    alt="Thumbnail 1"
                    // eslint-disable-next-line no-undef
                    onMouseOver={() => handleThumbnailHoverBlue(womenblue1)}
                  />

                  <img
                    className="thumbnail"
                    src={womenblue2}
                    alt="Thumbnail 2"
                    // eslint-disable-next-line no-undef
                    onMouseOver={() => handleThumbnailHoverBlue(womenblue2)}
                  />

                  <img
                    className="thumbnail"
                    src={womenblue3}
                    alt="Thumbnail 3"
                    // eslint-disable-next-line no-undef
                    onMouseOver={() => handleThumbnailHoverBlue(womenblue3)}
                  />

                  <img
                    className="thumbnail"
                    src={womenblue4}
                    alt="Thumbnail 4"
                    onMouseOver={() => handleThumbnailHoverBlue(womenblue4)}
                  />

                </div>

                <div className="main-image">
                  <img src={currentImageBlue} alt="Main Product Image" />
                </div>
              </div>
            </Grid>



            <Grid lg={6} md={12} sm={12} sx={12}>
              <div className="product-content-box">
                <div className="detail-content">
                  <Link to='/' className="text-14 d-inline-block mb-10">
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
                    <Grid lg={4} sm={4} md={4}>
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
                    <Grid lg={4} sm={4} md={4} >
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
                    <Grid lg={4} sm={4} md={4}>
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
                        sx={{ bgcolor: "#283593" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps"
                      >
                        <TiSocialFacebook />
                      </Avatar>
                      <Avatar
                        sx={{ bgcolor: "#283593" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps"
                      >
                        <AiOutlineTwitter />
                      </Avatar>
                      <Avatar
                        sx={{ bgcolor: "#283593" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps"
                      >
                        <AiOutlineGoogle />
                      </Avatar>
                      <Avatar
                        sx={{ bgcolor: "#283593" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps"
                      >
                        <TiSocialInstagram />
                      </Avatar>


                    </Stack>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div className="products-details-box">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid lg={6} md={12} sm={12} sx={12}>
              <div className="product-images">
                <div className="thumbnail-images">
                  <img
                    className="thumbnail"
                    src={womenblack1}
                    alt="Thumbnail 1"
                    // eslint-disable-next-line no-undef
                    onMouseOver={() => handleThumbnailHoverBlack(womenblack1)}
                  />

                  <img
                    className="thumbnail"
                    src={womenblack2}
                    alt="Thumbnail 2"
                    // eslint-disable-next-line no-undef
                    onMouseOver={() => handleThumbnailHoverBlack(womenblack2)}
                  />

                  <img
                    className="thumbnail"
                    src={womenblack3}
                    alt="Thumbnail 3"
                    // eslint-disable-next-line no-undef
                    onMouseOver={() =>handleThumbnailHoverBlack(womenblack3)}
                  />

                  <img
                    className="thumbnail"
                    src={womenblack4}
                    alt="Thumbnail 4"
                    onMouseOver={() => handleThumbnailHoverBlack(womenblack4)}
                  />

                </div>

                <div className="main-image">
                  <img src={currentImageBlack} alt="Main Product Image" />
                </div>
              </div>
            </Grid>



            <Grid lg={6} md={12} sm={12} sx={12}>
              <div className="product-content-box">
                <div className="detail-content">
                  <Link to='/' className="text-14 d-inline-block mb-10">
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
                    <Grid lg={4} sm={4} md={4}>
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
                    <Grid lg={4} sm={4} md={4} >
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
                    <Grid lg={4} sm={4} md={4}>
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
                        sx={{ bgcolor: "#283593" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps"
                      >
                        <TiSocialFacebook />
                      </Avatar>
                      <Avatar
                        sx={{ bgcolor: "#283593" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps"
                      >
                        <AiOutlineTwitter />
                      </Avatar>
                      <Avatar
                        sx={{ bgcolor: "#283593" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps"
                      >
                        <AiOutlineGoogle />
                      </Avatar>
                      <Avatar
                        sx={{ bgcolor: "#283593" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps"
                      >
                        <TiSocialInstagram />
                      </Avatar>


                    </Stack>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>

      



      <div className="you-might-also-like-main-container">
        <h1 style={{marginBottom:'50px',fontSize:'2.813rem',lineHeight:'rem',fontWeight:'500'}}>You Might Also Like</h1>
        <div className="you-might-also-like-grids-container">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4} columns={12}>
              <Grid item xs={12} lg={3} md={6} sm={6} >
                <Card sx={{ maxWidth: 345 }}>
                  <div className="card-media-image-main-container">
                    <div className="card-media-image-container">
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="420"
                        image={womenImage1}
                      />
                      <AiFillHeart className="heart-icon" />
                    </div>
                    <div className="shopping-cart-icon-for-cart-card-container">
                      <Avatar
                        sx={{
                          bgcolor: "rgb(255, 87, 34)", width: 60,   // Adjust the width as needed
                          height: 60, transition: "transform 0.6s"
                        }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps-for-shop"
                      >
                        <ShoppingCartIcon className="shopping-cart-icon-for-cart-card" />
                      </Avatar>
                    </div>

                  </div>
                  <h2 className="heading2-you-might-also-like-container" >Red Strip Dress</h2>
                  <div className="price-and-start-rating-main-container">
                    <p style={{ marginLeft: '15px', color: '#ff5722', fontSize: '1rem', fontWeight: '500', lineHeight: '24px', fontFamily: 'roboto,sans-serif' }}>$ 97.75</p>
                    <Box
                      sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row-reverse',
                        justifyContent: 'space-around',
                        alignContent: 'space-around'
                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                      />
                      <Box sx={{ ml: 2 }}></Box>
                    </Box>
                  </div>
                </Card>
              </Grid>

              <Grid item xs={12} lg={3} md={6} sm={6}>
                <Card sx={{ maxWidth: 345 }}>
                  <div className="card-media-image-main-container">
                    <div className="card-media-image-container">
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="420"
                        image={womenImage2}
                      />
                      <AiFillHeart className="heart-icon" />
                    </div>
                    <div className="shopping-cart-icon-for-cart-card-container">
                      <Avatar
                        sx={{
                          bgcolor: "rgb(255, 87, 34)", width: 60,   // Adjust the width as needed
                          height: 60, transition: "transform 0.6s"
                        }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps-for-shop"
                      >
                        <ShoppingCartIcon className="shopping-cart-icon-for-cart-card" />
                      </Avatar>
                    </div>

                  </div>
                  <h2 className="heading2-you-might-also-like-container">Blue Denim</h2>
                  <div className="price-and-start-rating-main-container">
                    <p style={{ marginLeft: '15px', color: '#ff5722', fontSize: '1rem', fontWeight: '500', lineHeight: '24px', fontFamily: 'roboto,sans-serif' }}>$ 49.75</p>
                    <Box
                      sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row-reverse',
                        justifyContent: 'space-around',
                        alignContent: 'space-around'
                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                      />
                      <Box sx={{ ml: 2 }}></Box>
                    </Box>
                  </div>
                </Card>
              </Grid>


              <Grid item xs={12} lg={3} md={6} sm={6}>
                <Card sx={{ maxWidth: 345 }}>
                  <div className="card-media-image-main-container">
                    <div className="card-media-image-container">
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="420"
                        image={womenImage3}
                      />
                      <AiFillHeart className="heart-icon" />
                    </div>
                    <div className="shopping-cart-icon-for-cart-card-container">
                      <Avatar
                        sx={{
                          bgcolor: "rgb(255, 87, 34)", width: 60,   // Adjust the width as needed
                          height: 60, transition: "transform 0.6s"
                        }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps-for-shop"
                      >
                        <ShoppingCartIcon className="shopping-cart-icon-for-cart-card" />
                      </Avatar>
                    </div>

                  </div>

                  <h2 className="heading2-you-might-also-like-container" >Black Dress</h2>


                  <div className="price-and-start-rating-main-container">
                    <p style={{ marginLeft: '15px', color: '#ff5722', fontSize: '1rem', fontWeight: '500', lineHeight: '24px', fontFamily: 'roboto,sans-serif' }}>$ 15.75</p>
                    <Box
                      sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row-reverse',
                        justifyContent: 'space-around',
                        alignContent: 'space-around'
                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                      />
                      <Box sx={{ ml: 2 }}></Box>
                    </Box>
                  </div>
                </Card>
              </Grid>


              <Grid item xs={12} lg={3} md={6} sm={6}>
                <Card sx={{ maxWidth: 345 }} >
                  <div className="card-media-image-main-container">
                    <div className="card-media-image-container">
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="420"
                        image={womenImage4}
                      />
                      <AiFillHeart className="heart-icon" />
                    </div>
                    <div className="shopping-cart-icon-for-cart-card-container">
                      <Avatar
                        sx={{
                          bgcolor: "rgb(255, 87, 34)", width: 60,   // Adjust the width as needed
                          height: 60, transition: "transform 0.6s"
                        }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className="avatar-for-new-social-apps-for-shop"
                      >
                        <ShoppingCartIcon className="shopping-cart-icon-for-cart-card" />
                      </Avatar>
                    </div>

                  </div>
                  <h2 className="heading2-you-might-also-like-container" >White T-Shirt</h2>
                  <div className="price-and-start-rating-main-container">
                    <p style={{ marginLeft: '15px', color: '#ff5722', fontSize: '1rem', fontWeight: '500', lineHeight: '24px', fontFamily: 'roboto,sans-serif' }}>$ 19.45</p>
                    <Box
                      sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row-reverse',
                        justifyContent: 'space-around',
                        alignContent: 'space-around'
                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                      />
                      <Box sx={{ ml: 2 }}></Box>
                    </Box>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Box>

          <Link to='/accessories'> 
             
            <Button variant="contained" size="medium" style={{ color: '#000', backgroundColor: '#fff', marginTop: '80px', fontWeight: '600', textTransform: 'capitalize', fontSize: '.875rem' }}>
              Show All
            </Button>
          </Link>

        </div>

      </div>


      <Footer />
    </div>
  );
};

export default ProductsDetails;
