import React from "react";
import "../NewProducts.css";
// Tabs
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// card
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { PiCurrencyInrBold } from 'react-icons/pi';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';

// Images
import accessories1 from "../assets/images/accessories/a-1-a.jpg";
import accessories2 from "../assets/images/accessories/a-2-a.jpg";
import accessories3 from "../assets/images/accessories/a-3-a.jpg";
import accessories4 from "../assets/images/accessories/a-4-a.jpg";
import accessories5 from "../assets/images/accessories/a-5-a.jpg";

import gadgets1 from "../assets/images/gadgets/g-1-a.jpg";
import gadgets2 from "../assets/images/gadgets/mobile.jpeg";
import gadgets3 from "../assets/images/gadgets/g-3-a.jpg";
import gadgets4 from "../assets/images/gadgets/g-4-a.jpg";
import gadgets5 from "../assets/images/gadgets/g-5-a.jpg";

import men1 from "../assets/images/men/1-item-a.jpg";
import men2 from "../assets/images/men/2-item-a.jpg";
import men3 from "../assets/images/men/3-item-a.jpg";
import men4 from "../assets/images/men/cat-shoes.jpg";
import men5 from "../assets/images/men/5-item-a.jpg";

import women6 from "../assets/images/women/6-item-a.jpg";
import women7 from "../assets/images/women/7-item-a.jpg";
import women8 from "../assets/images/women/8-item-a.jpg";
import women9 from "../assets/images/women/9-item-a.jpg";


const NewProducts = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  
  


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 520,
        settings: {
          dots: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  const accessories = [
    { 
        id:1,
        image: accessories1, 
        productTitle: 'Laptop Backpack', 
        popular: 'Popular' ,
        popularBtnColors: 'primary' ,
        price: '92.75' ,
        rating: 4 ,
    },
    { 
        id:2,
        image: accessories2, 
        productTitle: 'Men Belts', 
        popular: 'Popular' ,
        popularBtnColors: 'info' ,
        price: '57.75' ,
        rating: 2 ,
    },
    { 
        id:3,
        image: accessories3, 
        productTitle: 'Steel Chain', 
        popular: 'Popular' ,
        popularBtnColors: 'warning' ,
        price: '56.75' ,
        rating: 3 ,
    },
    { 
        id:4,
        image: accessories4, 
        productTitle: 'Men Purse', 
        popular: 'Popular' ,
        popularBtnColors: 'info' ,
        price: '15.75' ,
        rating: 4 ,
    },
    { 
        id:5,
        image: accessories5, 
        productTitle: 'Summer Goggles', 
        popular: 'Popular' ,
        popularBtnColors: 'secondary' ,
        price: '15.75' ,
        rating: 5 ,
    },
    
  ];
  const gadgets = [
    { 
        id:1,
        image: gadgets1, 
        productTitle: 'Wired Headphone', 
        popular: 'Popular' ,
        popularBtnColors: 'primary' ,
        price: '125.75' ,
        rating: 4 ,
    },
    { 
        id:2,
        image: gadgets2, 
        productTitle: 'Black Smartphone', 
        popular: 'Popular' ,
        popularBtnColors: 'info' ,
        price: '897' ,
        rating: 2 ,
    },
    { 
        id:3,
        image: gadgets3, 
        productTitle: 'Digial Watch', 
        popular: 'Popular' ,
        popularBtnColors: 'warning' ,
        price: '357.75' ,
        rating: 3 ,
    },
    { 
        id:4,
        image: gadgets4, 
        productTitle: 'Digital Watch', 
        popular: 'Popular' ,
        popularBtnColors: 'info' ,
        price: '586.75' ,
        rating: 4 ,
    },
    { 
        id:5,
        image: gadgets5, 
        productTitle: 'Circular Speaker', 
        popular: 'Popular' ,
        popularBtnColors: 'secondary' ,
        price: '989' ,
        rating: 5 ,
    },
    
  ];
  const men = [
    { 
        id:1,
        image: men1, 
        productTitle: 'Denim Pullover', 
        popular: 'Popular' ,
        popularBtnColors: 'primary' ,
        price: '42.75' ,
        rating: 4 ,
    },
    { 
        id:2,
        image: men2, 
        productTitle: 'Super Jacket', 
        popular: 'Popular' ,
        popularBtnColors: 'info' ,
        price: '82.75' ,
        rating: 2 ,
    },
    { 
        id:3,
        image: men3, 
        productTitle: 'Vintage Jean', 
        popular: 'Popular' ,
        popularBtnColors: 'warning' ,
        price: '18.75' ,
        rating: 3 ,
    },
    { 
        id:4,
        image: men4, 
        productTitle: 'Men White AIR', 
        popular: 'Popular' ,
        popularBtnColors: 'info' ,
        price: '65.75' ,
        rating: 4 ,
    },
    { 
        id:5,
        image: men5, 
        productTitle: 'Black T-Shirt', 
        popular: 'Popular' ,
        popularBtnColors: 'secondary' ,
        price: '22.22' ,
        rating: 5 ,
    },
    
  ];
  const women = [
    { 
        id:1,
        image: women6, 
        productTitle: 'Red Strip Dress', 
        popular: 'Popular' ,
        popularBtnColors: 'primary' ,
        price: '973.65' ,
        rating: 4 ,
    },
    { 
        id:2,
        image: women7, 
        productTitle: 'Blue Denim', 
        popular: 'Popular' ,
        popularBtnColors: 'info' ,
        price: '1977.21' ,
        rating: 2 ,
    },
    { 
        id:3,
        image: women8, 
        productTitle: 'Black Dress', 
        popular: 'Popular' ,
        popularBtnColors: 'warning' ,
        price: '1524.75' ,
        rating: 3 ,
    },
    { 
        id:4,
        image: women9, 
        productTitle: 'White T-Shirt', 
        popular: 'Popular' ,
        popularBtnColors: 'info' ,
        price: '187.12' ,
        rating: 4 ,
    },
    
    
  ];

  

  return (
    
    <div className="new-products-setions">
      <div className="new-products-headding-box">
        <div className="new-products-headdings">
          <h2>This New Products</h2>
        </div>
      </div>

      <div className="new-products-list">
        <div className="new-products-list-box">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="accessories" className="products-tabs" value="1"/>
                  <Tab label="gadgets" className="products-tabs" value="2" />
                  <Tab label="men" className="products-tabs" value="3" />
                  <Tab label="women" className="products-tabs" value="4" />
                </TabList>
              </Box>
              <TabPanel value="1">

                <Slider {...settings}>
                {accessories.map((path) => (
                  <div key={path.id} >
                    <Card sx={{ maxWidth: '100%' }} className="new-products">
                      
                      <CardMedia component="img" image={path.image} alt={path.productTitle} />

                        <Button variant="contained" color={path.popularBtnColors} className="popular-btn" size="small">
                                {path.popular}
                        </Button>

                        <Button variant="contained" color="secondary" className="price-btn" size="small">
                          <PiCurrencyInrBold /> {path.price}
                        </Button>

                          <div className="product-cart-icon">
                            <Stack direction="row" spacing={1}>
                                <Avatar className="product-avatar-cart-box">
                                  <ShoppingCartIcon  className="roduct-avatar-cart"/>
                                </Avatar>
                              </Stack>
                          </div>

                      <CardContent>
                        <Typography variant="body2">
                            <div className="product-content">
                              
                                <h6>{path.productTitle}</h6>
                               
                                <Stack spacing={1}>
                                   
                                    <Rating name="read-only" defaultValue={path.rating} readOnly />
                                    
                                </Stack>

                            </div>
                        </Typography>
                      </CardContent>
                      <hr/>
                      <CardActions disableSpacing>

                      <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2} className="product-favorite-icon">
                                <Grid item xs={6}>
                                    <IconButton >
                                        <FavoriteIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={6} className="product-eye-icon">
                                    <IconButton >
                                        <RemoveRedEyeIcon  />
                                    </IconButton>
                                </Grid>
                                
                            </Grid>
                        </Box>
                        
                      </CardActions>
                    </Card>
                  </div>
                  ))}
                </Slider>

              </TabPanel>
              <TabPanel value="2">

              <Slider {...settings}>
                {gadgets.map((path) => (
                  <div key={path.id}>
                    <Card sx={{ maxWidth: '100%' }}  className="new-products">
                      
                      <CardMedia component="img" image={path.image} alt={path.productTitle} />
                        <Button variant="contained" color={path.popularBtnColors} className="popular-btn" size="small">
                                {path.popular}
                        </Button>

                        <Button variant="contained" color="secondary" className="price-btn" size="small">
                                <PiCurrencyInrBold /> {path.price}
                        </Button>

                        <div className="product-cart-icon">
                            <Stack direction="row" spacing={1}>
                                <Avatar className="product-avatar-cart-box">
                                  <ShoppingCartIcon  className="roduct-avatar-cart"/>
                                </Avatar>
                              </Stack>
                          </div>

                      <CardContent>
                        <Typography variant="body2">
                            <div className="product-content">
                                <h6>{path.productTitle}</h6>
                               
                                <Stack spacing={1}>
                                   
                                    <Rating name="read-only" defaultValue={path.rating} readOnly />
                                    
                                </Stack>

                            </div>
                        </Typography>
                      </CardContent>
                      <hr/>
                      <CardActions disableSpacing>

                      <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2} className="product-favorite-icon">
                                <Grid item xs={6}>
                                    <IconButton >
                                        <FavoriteIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={6} className="product-eye-icon">
                                    <IconButton >
                                        <RemoveRedEyeIcon  />
                                    </IconButton>
                                </Grid>
                                
                            </Grid>
                        </Box>
                        
                      </CardActions>
                    </Card>
                  </div>
                  ))}
                </Slider>

              </TabPanel>
              <TabPanel value="3">

              <Slider {...settings}>
                {men.map((path) => (
                  <div key={path.id}>
                    <Card sx={{ maxWidth: '100%' }} className="new-products">
                      
                      <CardMedia component="img" image={path.image} alt={path.productTitle} />
                        <Button variant="contained" color={path.popularBtnColors} className="popular-btn" size="small">
                                {path.popular}
                        </Button>

                        <Button variant="contained" color="secondary" className="price-btn" size="small">
                                <PiCurrencyInrBold /> {path.price}
                        </Button>

                        <div className="product-cart-icon">
                            <Stack direction="row" spacing={1}>
                                <Avatar className="product-avatar-cart-box">
                                  <ShoppingCartIcon  className="roduct-avatar-cart"/>
                                </Avatar>
                              </Stack>
                          </div>

                      <CardContent>
                        <Typography variant="body2">
                            <div className="product-content">
                                <h6>{path.productTitle}</h6>
                               
                                <Stack spacing={1}>
                                   
                                    <Rating name="read-only" defaultValue={path.rating} readOnly />
                                    
                                </Stack>

                            </div>
                        </Typography>
                      </CardContent>
                      <hr/>
                      <CardActions disableSpacing>

                      <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2} className="product-favorite-icon">
                                <Grid item xs={6}>
                                    <IconButton >
                                        <FavoriteIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={6} className="product-eye-icon">
                                    <IconButton >
                                        <RemoveRedEyeIcon  />
                                    </IconButton>
                                </Grid>
                                
                            </Grid>
                        </Box>
                        
                      </CardActions>
                    </Card>
                  </div>
                  ))}
                </Slider>

              </TabPanel>
              <TabPanel value="4">

              <Slider {...settings}>
                {women.map((path) => (
                  <div key={path.id}>
                    <Card sx={{ maxWidth: '100%' }} className="new-products">
                      
                      <CardMedia component="img" image={path.image} alt={path.productTitle} />
                      
                        <Button variant="contained" color={path.popularBtnColors} className="popular-btn" size="small">
                                {path.popular}
                        </Button>

                        <Button variant="contained" color="secondary" className="price-btn" size="small">
                                <PiCurrencyInrBold /> {path.price}
                        </Button>

                        <div className="product-cart-icon">
                            <Stack direction="row" spacing={1}>
                                <Avatar className="product-avatar-cart-box">
                                  <ShoppingCartIcon  className="roduct-avatar-cart"/>
                                </Avatar>
                              </Stack>
                          </div>

                      <CardContent>
                        <Typography variant="body2">
                            <div className="product-content">
                                <h6>{path.productTitle}</h6>
                               
                                <Stack spacing={1}>
                                   
                                    <Rating name="read-only" defaultValue={path.rating} readOnly />
                                    
                                </Stack>

                            </div>
                        </Typography>
                      </CardContent>
                      <hr/>
                      <CardActions disableSpacing>

                      <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2} className="product-favorite-icon">
                                <Grid item xs={6}>
                                    <IconButton >
                                        <FavoriteIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={6} className="product-eye-icon">
                                    <IconButton >
                                        <RemoveRedEyeIcon  />
                                    </IconButton>
                                </Grid>
                                
                            </Grid>
                        </Box>
                        
                      </CardActions>
                    </Card>
                  </div>
                  ))}
                </Slider>

              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
