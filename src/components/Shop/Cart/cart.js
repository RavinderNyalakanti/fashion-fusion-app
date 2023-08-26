/* eslint-disable jsx-a11y/img-redundant-alt */
import Footer from '../../Footer'
import './cart.css'
import jacketImg from '../../../assets/images/men/1-item-a.jpg'
import superJacket from '../../../assets/images/men/2-item-a.jpg'
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
/*select */
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Button from '@mui/material/Button';



/*grids */
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent', // Set the background color to transparent
    boxShadow: 'none', // Remove the box shadow
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));




const Cart = () => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className='cart-details-main-container'>
            <div className='cart-details-image-container'>
                <h1 style={{ color: '#fff', fontSize: '2rem' }}>Here’s What’s In Your Bag.</h1>
                <p style={{ color: '#fff', fontSize: '1.2rem' }}>Our Latest News And Learning Articles.</p>
            </div>
            <div className='cart-details-second-main-container'>
                <div className='cart-details-second-main-container-card1'>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={6}>
                            <Grid item lg={2} md={12} sm={12} xs={12}>
                                <div className='jacket-blezzer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Item>
                                        <img style={{ height: '130px', width: '100px' }} src={jacketImg} alt='jacket-cart-image' />
                                    </Item>
                                </div>

                            </Grid>

                            <Grid item lg={2} md={6} sm={6} xs={12}>
                                <Item>
                                    <div className='denim-card' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '40px' }}>
                                        <h2 style={{ width: '100%', color: '#000', marginBottom: "10px" }}>
                                            Denim Pullover
                                        </h2>
                                        <p style={{ width: '100%' }}>Delivery in 3-4 days | Free</p>
                                    </div>
                                </Item>
                            </Grid>
                            <Grid item lg={2} md={6} sm={6} xs={6}>
                                <Item>
                                    <p className='denim-cost-card' style={{ marginTop: '50px', fontSize: '1.2rem' }}>$
                                        37.03</p>
                                </Item>
                            </Grid>
                            <Grid item lg={2} md={4} sm={4} xs={6}>
                                <Item>
                                    <div className='select-cost-final-container' style={{ marginTop: '25px' }}>
                                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                            <InputLabel id="demo-simple-select-standard-label">Quantity</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                value={age}
                                                onChange={handleChange}
                                                label="Age"

                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>1</MenuItem>
                                                <MenuItem value={20}>2</MenuItem>
                                                <MenuItem value={30}>3</MenuItem>
                                                <MenuItem value={30}>4</MenuItem>
                                                <MenuItem value={30}>5</MenuItem>
                                                <MenuItem value={30}>6</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </Item>
                            </Grid>
                            <Grid item lg={2} md={4} sm={4} xs={6}>
                                <Item>
                                    <p className='final-cost-card' style={{ marginTop: '50px', fontSize: '1.2rem' }}>$
                                        37.03</p>
                                </Item>
                            </Grid>
                            <Grid item lg={2} md={4} sm={4} xs={6}>
                                <div className='delete-icon-cost-container'>
                                    <Item>
                                        <DeleteIcon style={{ color: "#ff5722", marginTop: '40px' }} />
                                    </Item>
                                </div>

                            </Grid>
                        </Grid>
                    </Box>
                </div>

                <hr />

                <div className='cart-details-second-main-container-card2'>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={6}>
                            <Grid item lg={2} md={12} sm={12} xs={12}>
                                <div className='jacket-blezzer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Item>
                                        <img style={{ height: '130px', width: '100px' }} src={superJacket} alt='jacket-cart-image' />
                                    </Item>
                                </div>

                            </Grid>

                            <Grid item lg={2} md={6} sm={6} xs={12}>
                                <Item>
                                    <div className='denim-card' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '40px' }}>
                                        <h2 style={{ width: '100%', color: '#000', marginBottom: "10px" }}>
                                            Denim Pullover
                                        </h2>
                                        <p style={{ width: '100%' }}>Delivery in 3-4 days | Free</p>
                                    </div>
                                </Item>
                            </Grid>
                            <Grid item lg={2} md={6} sm={6} xs={6}>
                                <Item>
                                    <p className='denim-cost-card' style={{ marginTop: '50px', fontSize: '1.2rem' }}>$
                                        90</p>
                                </Item>
                            </Grid>
                            <Grid item lg={2} md={4} sm={4} xs={6}>
                                <Item>
                                    <div className='select-cost-final-container' style={{ marginTop: '25px' }}>
                                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                            <InputLabel id="demo-simple-select-standard-label">Quantity</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                value={age}
                                                onChange={handleChange}
                                                label="Age"

                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>1</MenuItem>
                                                <MenuItem value={20}>2</MenuItem>
                                                <MenuItem value={30}>3</MenuItem>
                                                <MenuItem value={30}>4</MenuItem>
                                                <MenuItem value={30}>5</MenuItem>
                                                <MenuItem value={30}>6</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </Item>
                            </Grid>
                            <Grid item lg={2} md={4} sm={4} xs={6}>
                                <Item>
                                    <p className='final-cost-card' style={{ marginTop: '50px', fontSize: '1.2rem' }}>$
                                        90.00</p>
                                </Item>
                            </Grid>
                            <Grid item lg={2} md={4} sm={4} xs={6}>
                                <div className='delete-icon-cost-container'>
                                    <Item>
                                        <DeleteIcon style={{ color: "#ff5722", marginTop: '40px' }} />
                                    </Item>
                                </div>

                            </Grid>
                        </Grid>
                    </Box>
                </div>

            </div>

            <div className='total-bill-last-container'>
                <div className='bottom-total-bill-main-container'>
                    <div className='last-bill-total-cost-contaier'>
                        <p>Subtotal</p>
                        <p>$ 127.03</p>
                    </div>

                    <div className='last-bill-total-cost-contaier'>
                        <p>Shipping</p>
                        <p>$ 3.37</p>
                    </div>

                    <div className='last-bill-total-cost-contaier'>
                        <p>Tax(GST)</p>
                        <p>$ 11.37</p>
                    </div>
                    
                        <hr/>

                    <div className='last-bill-total-cost-contaier'>
                        <h1>Total</h1>
                        <h1>$ 141.77</h1>
                    </div> 
                    <div className='proceed-to-checkout-btn'>
                       <Button className='proceed-btn-payment-bill' style={{backgroundColor:'#ff5722',textTransform: 'capitalize'}} variant="contained">Proceed To Checkout</Button>
                    </div>
                </div>

              
            </div>
            <Footer />
        </div>
    )
}
export default Cart