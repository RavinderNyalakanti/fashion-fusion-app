/* eslint-disable jsx-a11y/alt-text */
import React from 'react'; 
import {Link} from 'react-router-dom'
import './index.css'; // Import the CSS file
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Collections from '../Collections';
import BottomContainer from '../BottomContainer';
// import { pink } from '@mui/material/colors';
// import { positions } from '@mui/system';
const Home = () => {
  const serviceDetails = [
    {
      title: 'Free Shipping',
      description: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.',
      icon: ShoppingCartIcon
    },
    {
      title: '24X7 Support',
      description: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.',
      icon: ThumbUpIcon
    },
    {
      title: 'Best Price',
      description: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.',
      icon: WhatshotIcon
    }
  ]
  return (
    <div className='home-main-container'>
      <div className='home-container'>
        <div className='image-container'>
          <img className='new-image' src='https://res.cloudinary.com/dpxkxorhz/image/upload/v1691327977/h-slider-1.e60ce1cc_ljn9wz.jpg' />

          <div className='banner-heading-box'>
            <p className='home-para'>2023 latest collection</p>
            <h1 className='text-main mb-lg-25 mb-20 home-heading'>New Fashion <br/> Collection</h1>
            <h1 className='text-main mb-lg-25 mb-20 home-heading2'>New Fashion Collection</h1>
             <Link to='/shoping'> 
             <Button variant="contained" color="success" className='shop_now-btn'>
            Shop Now
             </Button>
             </Link>
           
            
          </div>
        </div>

      </div>
      <div className='second-container-card'>

        <Box sx={{ flexGrow: 1 }}>

          <Grid container spacing={2}>
            {serviceDetails.map((service, index) => (
              <Grid item lg={4} md={4} sm={12} sx={12}>
                <div className='service-container'>
                  <div className='icon-container'>
                    <Stack>
                      <Avatar className='avatar'>

                        {React.createElement(service.icon)}

                      </Avatar>
                    </Stack>

                  </div>

                  <h1 className='service-title'>{service.title}</h1>
                  <p className='service-description'>{service.description}</p>
                </div>
              </Grid>
            ))}

            {/* <Grid item xs={4}>
              <div className='service-container'>
                <div className='icon-container'>
                  <Stack className=''>
                    <Avatar className='avatar'>
                      <ShoppingCartIcon />
                    </Avatar>
                  </Stack>

                </div>

                <h1 className='service-title'>Free Shipping</h1>
                <p className='service-description'>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.</p>
              </div>
            </Grid> */}


          </Grid>
        </Box>

      </div> 
         <Collections/> 
         <BottomContainer/>
    </div>


  );
};

export default Home;