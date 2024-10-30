import React, { useEffect } from 'react' 

import Navbar from '../Navbar' 
import imagePlaced from '../../assets/image-cart-placed.png'
import  './order.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

import { PropagateLoader } from "react-spinners"
import { useState } from 'react';

const color = [
  '#290af6'
]
export const OrderPlaced = () => { 
  const [loading , setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  },[])
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
        </div> : 
        <div className='order-placed-main-card'> 
        <Navbar/>  
        <div className='order-placed-card'>
               <h1 className='order-placed-heading'> 
                   Order Was Placed Successfully ...
                </h1> 
                <img className='image-order-placed' src={imagePlaced} alt='' /> 
                <Link to='/'> <Button variant='contained' size='small'>
                Back to Home
                </Button>
                </Link>
        </div>
      
       </div>
      }
    </div>
    
  )
}
