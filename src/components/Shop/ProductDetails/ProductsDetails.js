/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./productsDetails.css";


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
import thumbnaimainImage from '../../../assets/thumbnileImages/9-item-a.jpg'

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

const products = [
  { 
    id: 4,
    name: 'White T-Shirt',
    price: 1608,
    availability: 'In Stock',
    productCode: '#EM1208',
    tags: 'White Graphic Women',
    description:
      'Sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!',
    features: ['Slim Fit', '100% Cotton', 'Free Shipping and delivery in 4 Days'],
    colors: ['red', 'green', 'blue', 'yellow'],
    sizes: ['36', '38', '40', '42', '44', '46', '48'],
    quantities: [1, 2, 3, 4, 5],
    images: [thumbnile1,thumbnile2, thumbnile3, thumbnile4],
    mainImage: thumbnaimainImage, // Main image for this product
  },
  // {
  //   id: 1,
  //   name: 'Red Strip Dress',
  //   price: 8084,
  //   availability: 'In Stock',
  //   productCode: '#EM1205',
  //   tags: 'Red Women Outwear',
  //   description:
  //     'Amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!',
  //   features: ['Regular Fit', 'Pure Cotton', 'Delivery in 3 Days'],
  //   colors: ['red', 'green', 'blue', 'yellow'],
  //   sizes: ['36', '38', '40', '42', '44', '46', '48'],
  //   quantities: [1, 2, 3, 4, 5],
  //   images: [womenred1, womenred2, womenred3, womenred4],
  //   mainImage: womenredmainimage, // Main image for this product
  // },{
  //   id: 2,
  //   name: 'Blue Denim',
  //   price: 4114,
  //   availability: 'In Stocks',
  //   productCode: ' #EM1206',
  //   tags: 'Blue Outwear Denim',
  //   description:
  //     '  Dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!',
  //   features: ['Loose Fit', 'Pure Denim', 'Free Shipping and delivery in 2 Days'],
  //   colors: ['red', 'green', 'blue', 'yellow'],
  //   sizes: ['36', '38', '40', '42', '44', '46', '48'],
  //   quantities: [1, 2, 3, 4, 5],
  //   images: [womenblue1, womenblue2,womenblue3, womenblue4],
  //   mainImage: womenbluemainimage, // Main image for this product
  // },
  //   {id: 3,
  //   name: 'Black Dress',
  //   price: 1302,
  //   availability: 'In Stocks',
  //   productCode: '#EM1207',
  //   tags: 'Red Women Outwear',
  //   description:
  //     ' Consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!',
  //   features: [' Slim Fit', 'Pure Cotton', 'Free Shipping and delivery in 4 Dayss'],
  //   colors: ['red', 'green', 'blue', 'yellow'],
  //   sizes: ['36', '38', '40', '42', '44', '46', '48'],
  //   quantities: [1, 2, 3, 4, 5],
  //   images: [womenblack1, womenblack2, womenblack3, womenblack4],
  //   mainImage: womenblackmainimage, // Main image for this product
  // },
];
const ProductsDetails = () => {

  


  const [hoveredImages, setHoveredImages] = useState(
    products.map((product) => product.mainImage)
  );

  const handleThumbnailHover = (image, index) => {
    const updatedImages = [...hoveredImages];
    updatedImages[index] = image;
    setHoveredImages(updatedImages);
  };



  


  

  const value = 3.5;


  const productData = [
    {
      id: 1,
      title: 'Red Strip Dress',
      price: 97.75,
      rating: 4.5,
      image: womenImage1,
    },
    {
      id: 2,
      title: 'Blue Denim',
      price: 49.75,
      rating: 4.0,
      image: womenImage2,
    },
    {
      id: 3,
      title: 'Black Dress',
      price: 15.75,
      rating: 3.5,
      image: womenImage3,
    },
    {
      id: 4,
      title: 'White T-Shirt',
      price: 19.45,
      rating: 4.2,
      image: womenImage4,
    },
  ];




  return (
    <div className="products-details-section">
      <div className="contact-background-image-container">
        <h1>Prodcuts Details</h1>
      </div>
     
            <div>
            {products.map((product, index) => (
              <div key={index} className="products-details-box">
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid lg={6} md={12} sm={12} sx={12}>
                      <div className="product-images">
                        <div className="thumbnail-images">
                          {product.images.map((image, imgIndex) => (
                            <img
                              key={imgIndex}
                              className="thumbnail"
                              src={image}
                              alt={`Thumbnail ${imgIndex + 1}`}
                              onMouseOver={() => handleThumbnailHover(image, index)}
                            />
                          ))}
                        </div>
                        <div className="main-image">
                          <img src={hoveredImages[index]} alt="Main Product Image" />
                        </div>
                      </div>
                    </Grid>
                    <Grid lg={6} md={12} sm={12} sx={12}>
                      <div className="product-content-box">
                        <div className="detail-content">
                          <Link to="/" className="text-14 d-inline-block mb-10">
                            Back to shop
                          </Link>
                          <h2>{product.name}</h2>
                          <Link href="#" className="addAReview">
                            Add A Review
                          </Link>
                          <h4 className="price">
                            <span>{product.price}</span>
                          </h4>
                          <ul className="ul-tags">
                            <li>
                              <b className="tags">Availability : </b> {product.availability}
                            </li>
                            <li>
                              <b className="tags">Product Code : </b> {product.productCode}
                            </li>
                            <li>
                              <b className="tags">Tags : </b> {product.tags}
                            </li>
                          </ul>
                          <p>{product.description}</p>
                          <ul className="ul-tags">
                            {product.features.map((feature, featIndex) => (
                              <li key={featIndex}>&#x2022; {feature}</li>
                            ))}
                          </ul>
                          <Grid container spacing={3}>
                            <Grid lg={4} sm={4} md={4}>
                              <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                <InputLabel id="color-label">Color</InputLabel>
                                <Select
                                  labelId="color-label"
                                  id="color-select"
                                  value={product.colors[0]} // Default to the first color
                                
                                >
                                  {product.colors.map((color, colorIndex) => (
                                    <MenuItem key={colorIndex} value={color}>
                                      {color}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid lg={4} sm={4} md={4}>
                              <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                <InputLabel id="size-label">Size</InputLabel>
                                <Select
                                  labelId="size-label"
                                  id="size-select"
                                  value={product.sizes[0]} // Default to the first size
                                 
                                >
                                  {product.sizes.map((size, sizeIndex) => (
                                    <MenuItem key={sizeIndex} value={size}>
                                      {size}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid lg={4} sm={4} md={4}>
                              <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                <InputLabel id="quantity-label">Quantity</InputLabel>
                                <Select
                                  labelId="quantity-label"
                                  id="quantity-select"
                                  value={product.quantities[0]} // Default to the first quantity
                                 
                                >
                                  {product.quantities.map((quantity, qtyIndex) => (
                                    <MenuItem key={qtyIndex} value={quantity}>
                                      {quantity}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Grid>
                          </Grid>
                        </div>
                        <a href="#" style={{ color: '#000' }}>
                          Add To Wishlist
                        </a>
                        <div>
                          <Button
                            style={{
                              marginRight: '20px',
                              marginTop: '20px',
                              textTransform: 'capitalize',
                              backgroundColor: 'rgb(255, 87, 34)',
                            }}
                            size="large"
                            variant="contained"
                          >
                            View Cart
                          </Button> 
                          <Link to='/checkout'>
                          <Button
                            style={{
                              marginTop: '20px',
                              textTransform: 'capitalize',
                              backgroundColor: '#fff',
                              color: '#000',
                            }}
                            variant="contained"
                            size="large"
                          >
                            Buy Now
                          </Button>
                          </Link>
                         
                        </div>
                        <div className="product-details-avatar-main-container">
                          <p>Share Now</p>
                          <div className="product-details-avatar-inner-container">
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
            ))}
          </div>
      
         
     
      <div className="you-might-also-like-main-container">
        <h1 style={{ marginBottom: '50px', fontSize: '2.813rem', lineHeight: 'rem', fontWeight: '500' }}>You Might Also Like</h1>
        <div className="you-might-also-like-grids-container">
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
      {productData.map((product,index) => (
        <Grid key={product.id} item xs={12} lg={3} md={6} sm={6}    >
          <Card sx={{ maxWidth: 345 }}>
            <div className="card-media-image-main-container" >
              <div className="card-media-image-container">
                <CardMedia
                  component="img"
                  alt={product.title}
                  height="420"
                  image={product.image}
                />
                <AiFillHeart className="heart-icon" />
              </div>
              <div className="shopping-cart-icon-for-cart-card-container">
                <Avatar
                  sx={{
                    bgcolor: "rgb(255, 87, 34)",
                    width: 60,
                    height: 60,
                    transition: "transform 0.6s"
                  }}
                  alt="Remy Sharp"
                  src="/broken-image.jpg"
                  className="avatar-for-new-social-apps-for-shop"
                >
                  <ShoppingCartIcon className="shopping-cart-icon-for-cart-card" />
                </Avatar>
              </div>
            </div>
            <h2 className="heading2-you-might-also-like-container">{product.title}</h2>
            <div className="price-and-start-rating-main-container">
              <p style={{ marginLeft: '15px', color: '#ff5722', fontSize: '1rem', fontWeight: '500', lineHeight: '24px', fontFamily: 'roboto,sans-serif' }}>
                {`$ ${product.price}`}
              </p>
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
                  value={product.rating}
                  readOnly
                  precision={0.5}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <Box sx={{ ml: 2 }}></Box>
              </Box>
            </div>
          </Card>
        </Grid>
      ))}
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
