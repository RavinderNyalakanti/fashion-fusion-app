/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Footer from '../../Footer';
import Button from '@mui/material/Button';
import './index.css'

/*grid modules*/
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

/*textfileds*/
import TextField from '@mui/material/TextField';

/*card*/

import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';

import Checkbox from '@mui/material/Checkbox';
// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

const CheckOut = () => {
    return (
        <div className='checkout-main-container'>
            <div className='checkout-image-container'>
                <h1>CheckOut</h1>
            </div>
            <div className='sing-in--main-container'>
                <div className='button-order-details-container'>
                    <Button className='button-order-details' style={{ color: '#fff', backgroundColor: '#ff5722' }} variant="contained">Show Order Details: $141.77</Button>
                </div>

                <div className='form-main-container'>

                <Box lg={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        
                        <Grid className='grid-1' item xl={6} lg={6} md={6} sm={12}>
                            <Card variant="outlined">
                                <div className='form-container'>
                                    <h2>User Sign In</h2>
                                    <TextField style={{ marginBottom: '20px', width: '90%' }} id="standard-basic" label="Email*" variant="standard" />
                                    <TextField style={{ width: '90%' }} id="standard-basic" label="Password*" variant="standard" />
                                    <div className='check-and-text'>
                                        <div className='checkbox-container'>
                                            <label htmlFor='rememberCheckbox'>
                                                <Checkbox id='rememberCheckbox' defaultChecked size='small' />
                                                <span>Remember</span>
                                            </label>
                                        </div>
                                        <a href='#' style={{ color: '#283593', fontSize: '16px', width: '100%', fontWeight: '450' }}>Forgot Password?</a>

                                    </div>

                                    <Button className='button-order-details' style={{ color: '#fff', backgroundColor: '#ff5722', marginTop: '20px' }} variant="contained">Sign In</Button>
                                    <p>Don't have an account? <a href='#' style={{ color: '#283593', fontWeight: '450' }}>Click here to create an account</a></p>
                                </div>

                            </Card>
                        </Grid>
                        <Grid className='grid-2' item xl={6} lg={6} md={6} sm={12}>
                            <Card variant="outlined">
                                <div className='form-container2'>
                                    <h1>Guest Checkout</h1>
                                    <p>Proceed to checkout and create an account later.</p>
                                    <Button className='button-order-details' style={{ color: '#fff', marginTop: '20px', backgroundColor: '#ff5722' }} variant="contained">Continue as Guest</Button>
                                </div>

                            </Card>
                        </Grid>
                    </Grid>

                </Box>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CheckOut;