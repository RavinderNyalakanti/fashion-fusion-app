/* eslint-disable jsx-a11y/img-redundant-alt */
// import Footer from '../../Footer'
import './cart.css'
import { useEffect, useState } from 'react'; 
import { CartContext } from '../../Context/CartContext'; 

import DeleteIcon from '@mui/icons-material/Delete'; 
import cartImage from '../../../assets/imagecartempty.png';
/*select */
import Button from '@mui/material/Button';

/*grids */
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Dialog, DialogTitle, TextField,DialogActions, DialogContent, DialogContentText } from '@mui/material';
import Navbar from '../../Navbar';
import { Link } from 'react-router-dom';
import PropagateLoader from "react-spinners/PropagateLoader";
import axios from 'axios';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent', // Set the background color to transparent
    boxShadow: 'none', // Remove the box shadow
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

const color = [
    '#290af6'
  ]

const Cart = () => {
    const [cartList, setCartList] = useState([]) 
    const [openDialog, setOpenDialog] = useState(false); 
    const [ProductToDelete, setProductToDelete] = useState(null); 
    const [openDialogPlaced, setOpenDialogPlaced] = useState(false);
    const [loading, setLoading] = useState(false);

    const getList = async () => {
        try {
            const res = await fetch(`https://fashion-fusion-backend-vymx.onrender.com/api/orders/?user=${localStorage.getItem('username')}`);
            const data = await res.json();

            if (data.length !== 0) {
                const promises = data.map(async (item) => {
                    const id = item.productId;
                    const response = await fetch(`https://dummyjson.com/products/${id}`);
                    const product = await response.json();
                    return { product, quantity: item.quantity };
                });

                const products = await Promise.all(promises);
                setCartList(products); 
              
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getList();
    }, []);

const handleDeleteProduct = async (productId) => { 
       setProductToDelete(productId); 
       setOpenDialog(true);
} 
const handleDeleteConfirm = async () => { 
     try {
        const userId = localStorage.getItem('username'); 
        await axios.delete(`https://fashion-fusion-backend-vymx.onrender.com/api/orders/${ProductToDelete}/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })  

        const updatedCartList = cartList.filter(item => item.product.id !== ProductToDelete);
        setCartList(updatedCartList);
        localStorage.setItem('cartList', JSON.stringify(updatedCartList)); 
        window.location.reload();
     } catch (error) {
        console.log(error);
     } 
     finally{   
        setOpenDialog(false);
        setProductToDelete(null);
     }
}   
console.log(cartList)



const closeDialog = () => {
    setOpenDialog(false);
    setProductToDelete(null);
}
const closeDialogPlaced = () => {
    setOpenDialogPlaced(false);
    
} 
const handleOrderProduct = ()=>{
    setOpenDialogPlaced(true);
}

useEffect(() => {
    setLoading(true); 
    setTimeout(() => {
        setLoading(false);
    },2000)
}, []);
 

    return ( 
        <div> 
            {loading ? 
            <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      position: 'absolute', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 1000
    }}>
      <PropagateLoader color={color} loading={loading} size={10} />
    </div> : 
    <div> 
           <Navbar/>
    <div className='cart-details-main-container'> 
   
        {/* <div className='cart-details-image-container'>
            <h1 style={{ color: '#fff', fontSize: '2rem' }}>Here’s What’s In Your Bag.</h1>
            <p style={{ color: '#fff', fontSize: '1.2rem' }}>Our Latest News And Learning Articles.</p>
        </div> */}

        <div className='cart-details-second-main-container'>
            {cartList.length === 0 ? (
                <div className='cart-empty-card' >
                   
                    <img className='cart-empty-image-card' src={cartImage} alt='cart-empty' /> 
                    <h1 color='red' style={{ color: '#0b91de' }}>...   cart is empty   ...</h1>  
                    <Link to='/'> 
                    <Button   variant='contained' size='small'>Back to Home</Button> 
                    </Link>
                </div>
            ) : (
                cartList.map((item) => (
                    <div className='cart-details-second-main-container-card1' key={item.product.id}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={6} className='grid-card-container-for-cart'>
                               
                               <Link to={`/product/${item.product.id}`} style={{ textDecoration: 'none', color: '#000' }}> 
                                <Grid item lg={2} md={12} sm={12} xs={12}>
                                    <div className='jacket-blezzer'>
                                        <Item>
                                            <img style={{ height: '160px', width: '160px' }} src={item.product.images[0]} alt='jacket-cart-image' />
                                        </Item>
                                    </div>
                                </Grid>
                               </Link>

                                <Grid item lg={2} md={6} sm={6} xs={12}>
                                    <Item>
                                        <div className='denim-card' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                                            <h2 style={{ width: '100%', color: '#000', marginBottom: "10px" }}>
                                                {item.product.title}
                                            </h2>
                                            <p style={{ width: '100%' }}>Delivery in 3-4 days | Free</p>
                                        </div>
                                    </Item>
                                </Grid>

                                <Grid item lg={2} md={6} sm={6} xs={6}>
                                    <Item>
                                        <div className='select-cost-final-container' style={{  display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <Button style={{ backgroundColor: '#fff', color: '#000' }} variant="contained" onClick={() => {
                                                if (item.quantity > 1) {
                                                    setCartList(cartList.map((cartItem) => {
                                                        if (cartItem.product.id === item.product.id) {
                                                            return { ...cartItem, quantity: cartItem.quantity - 1 }
                                                        } else {
                                                            return cartItem
                                                        }
                                                    }))
                                                }
                                            }}>
                                                -
                                            </Button>
                                            <TextField
                                                type="number"
                                                value={item.quantity}
                                                style={{ width: '100px', textAlign: 'center' }}
                                                InputProps={{
                                                    inputProps: {
                                                        step: 1,
                                                    },
                                                    
                                                }}
                                                onChange={(e) => {
                                                    setCartList(cartList.map((cartItem) => {
                                                        if (cartItem.product.id === item.product.id) {
                                                            return { ...cartItem, quantity: parseInt(e.target.value) }
                                                        } else {
                                                            return cartItem
                                                        }
                                                    }))
                                                }}
                                            />
                                            <Button style={{ backgroundColor: '#fff', color: '#000' }} variant="contained" onClick={() => {
                                                setCartList(cartList.map((cartItem) => {
                                                    if (cartItem.product.id === item.product.id) {
                                                        return { ...cartItem, quantity: cartItem.quantity + 1 }
                                                    } else {
                                                        return cartItem
                                                    }
                                                }))
                                            }}>
                                                +
                                            </Button>
                                        </div>
                                    </Item>
                                </Grid>

                                <Grid item lg={2} md={4} sm={4} xs={6}>
                                    <Item>
                                        <p className='final-cost-card' style={{  fontSize: '1.2rem' }}>Rs. {(item.product.price * 75 * item.quantity).toFixed(2)}</p>
                                    </Item>
                                </Grid>

                                <Grid item lg={2} md={4} sm={4} xs={6}>
                                    <div >
                                        <Button
                                            variant="contained"
                                            color="error" 
                                            size='small'
                                            startIcon={<DeleteIcon />}
                                            onClick={()=> {handleDeleteProduct(item.product.id);} }
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </Grid>
                                
                                
                            </Grid>
                        </Box>
                    </div>
                ))
            )}
        </div>

        {cartList.length > 0 && (
<div className='total-bill-last-container'>
    <div className='bottom-total-bill-main-container'>
        <div className='last-bill-total-cost-contaier'>
            <p>Subtotal</p>
            <p>Rs. {(cartList.reduce((acc, cur) => acc + cur.product.price * cur.quantity, 0) * 75).toFixed(2)}</p>
        </div>

        <div className='last-bill-total-cost-contaier'>
            <p>Tax(GST)</p>
            <p>Rs. {(cartList.reduce((acc, cur) => acc + cur.product.price * cur.quantity, 0) * 75 * 0.18).toFixed(2)}</p>
        </div>
        
        <hr/>

        <div className='last-bill-total-cost-contaier'>
            <h1>Total</h1>
            <h1>Rs. {(cartList.reduce((acc, cur) => acc + cur.product.price * cur.quantity + (cur.product.price * cur.quantity * 0.18), 0) * 75).toFixed(2)}</h1>
        </div>

        <div className='proceed-to-checkout-btn'> 
        
            <Button className='proceed-btn-payment-bill' onClick={()=>handleOrderProduct()} style={{ backgroundColor: '#ff5722', textTransform: 'capitalize' }} variant="contained">
            Place Order
            </Button> 
        </div>
    </div>
</div>
)}

    <Dialog open={openDialogPlaced} onClose={closeDialogPlaced}>

        <DialogContent> 
            <DialogContentText> 
            Are Sure You Want To Confirm Your Order?
            </DialogContentText>
        </DialogContent>

        <DialogActions> 
            <Button style={{ marginRight: '10px' }} variant='contained' size='small' onClick={closeDialogPlaced}>Cancel Order</Button> 

            <Link to='/order-placed'> 
                    <Button variant='contained' size='small' color='success'>Confirm Order</Button>
            </Link> 
        </DialogActions> 
    </Dialog>



    <Dialog open={openDialog} onClose={closeDialog}>
        <DialogTitle>Remove Item</DialogTitle>
        <DialogContent> 
            <DialogContentText> 
            Are you sure you want to remove this item?
            </DialogContentText>
        </DialogContent>
        <DialogActions> 
            <Button variant='contained' onClick={closeDialog}>Cancel</Button> 
            <Button variant='contained' onClick={()=>{handleDeleteConfirm();}} color='error'>Delete</Button>
        </DialogActions> 
    </Dialog>

        {/* <Footer /> */}
    </div>
    </div>
    
    }
        </div>
    );
}

export default Cart;
