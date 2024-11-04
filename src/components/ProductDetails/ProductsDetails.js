import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import "./productsDetails.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Button from '@mui/material/Button';  
import Dialog from '@mui/material/Dialog'; // Import Dialog
import DialogActions from '@mui/material/DialogActions'; // For Dialog Actions
import DialogContent from '@mui/material/DialogContent'; // For Dialog Content
import DialogContentText from '@mui/material/DialogContentText'; // For Dialog Text
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter, AiOutlineGoogle } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti"; 
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'; // Import styles
import Footer from '../Footer.js';
import Navbar from "../Navbar";

import PropagateLoader from "react-spinners/PropagateLoader";



const color = [
  '#290af6'
]



const ProductsDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false); // Dialog visibility state

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setHoveredImage(data.thumbnail);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }

      setLoading(false);
    };

    fetchProductDetails();
  }, [id]);

  const addToCart = async () => {
    try {
      const user = localStorage.getItem('username');
      const res = await fetch('https://fashion-fusion-backend-vymx.onrender.com/api/orders/', {
        method: 'POST',
        body: JSON.stringify({
          user_id: user,
          productId: id,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res);

      // Show success dialog
      setShowDialog(true);

      // Automatically close the dialog after 3 seconds
      setTimeout(() => {
        setShowDialog(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { 
    setLoading(true);
   setTimeout(() => {
    setLoading(false);
   },3000)
  }, []);

  return ( 
    
    <div>
      {
        loading ? <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh', // Full viewport height
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          zIndex: 1000 // To ensure the loader is above everything else
        }}>
          <PropagateLoader color={color} loading={loading} size={10} />
        </div>:
        <div className="products-details-section"> 
        <Navbar/>
          
          <div className="products-details-box-main">
    
          {product ? (
            <div className="products-details-box">
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
                            onMouseOver={() => setHoveredImage(image)}
                          />
                        ))}
                      </div>
                      <div className="main-image"> 

                        <Zoom>
                        <img src={hoveredImage} alt="Main Product"  /> 
                        </Zoom>

                      </div>
                    </div>
                  </Grid>
                  <Grid lg={6} md={12} sm={12} sx={12}>
                    <div className="product-content-box">
                      <div className="detail-content">
                        <Link to="/" className="text-14 d-inline-block mb-10">
                          Back to shop
                        </Link>
                        <h2>{product.title}</h2>
                        <Link to="#" className="addAReview">
                          Add A Review
                        </Link>
                        <h4 className="price">
                          <span>${product.price}</span>
                        </h4>
                        <ul className="ul-tags">
                          <li>
                            <b className="tags">Availability : </b> In Stock
                          </li>
                          <li>
                            <b className="tags">Brand : </b> {product.brand}
                          </li>
                          <li>
                            <b className="tags">Category : </b> {product.category}
                          </li>
                        </ul>
                        <p>{product.description}</p>
                        <ul className="ul-tags">
                          <li>&#x2022; {product.brand}</li>
                          <li>&#x2022; {product.category}</li>
                        </ul>
                      </div>
                      <Link to="#" style={{ color: '#000' }}>
                        Add To Wishlist
                      </Link>
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
                          onClick={addToCart}
                        >
                          Add to Cart
                        </Button>
                        <Link to="/order-placed">
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
    
                      {/* Social Sharing Section */}
                      <div className="product-details-avatar-main-container">
                        <p>Share Now</p>
                        <div className="product-details-avatar-inner-container">
                          <Stack direction="row" spacing={1}>
                            <Avatar sx={{ bgcolor: "#283593" }}>
                              <TiSocialFacebook />
                            </Avatar>
                            <Avatar sx={{ bgcolor: "#283593" }}>
                              <AiOutlineTwitter />
                            </Avatar>
                            <Avatar sx={{ bgcolor: "#283593" }}>
                              <AiOutlineGoogle />
                            </Avatar>
                            <Avatar sx={{ bgcolor: "#283593" }}>
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
          ) : (
            <div>Loading...</div>
          )}
    
          {/* Success Dialog */}
          <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
            <DialogContent>
              <DialogContentText>
                Product added to cart successfully!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button 
    onClick={() => {
      setShowDialog(false);window.location.reload(); 
    }} 
    color="primary"
  >
    Close
  </Button>
            </DialogActions>
          </Dialog>
    
          <Footer />
        </div>
        </div>
      } 
     
      
    </div>


   
  );
};

export default ProductsDetails;
