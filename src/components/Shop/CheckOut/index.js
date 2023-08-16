/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Footer from '../../Footer';
import Button from '@mui/material/Button';

import './index.css'
const CheckOut = () => {
    return (
        <div className='checkout-main-container'> 
             <div className='checkout-image-container'>
                   <h1>CheckOut</h1>
             </div> 
             <div className='sing-in--main-container'>
             <Button style={{color:'#fff',backgroundColor:'#ff5722',display:'flex',alignSelf:'flex-end'  ,textAlign:'end'}} variant="contained">Show Order Details: $141.77</Button>
             </div>
           <Footer/>
        </div>
    );
};

export default CheckOut;