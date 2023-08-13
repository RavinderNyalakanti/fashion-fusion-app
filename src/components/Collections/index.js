import React from 'react';

import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid';
import newImage from '../../assets/images/collections/collection.jpg';

import mensCollection from '../../assets/images/collections/col-men.jpg';
import womensCollection from '../../assets/images/collections/col-women.jpg';
import watchCollection from '../../assets/images/collections/col-watches.jpg';
import accessoriesCollection from '../../assets/images/collections/col-accessories.jpg';
import './index.css'

const Collections = () => {

    return (
        <div className='collection-container'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item lg={4} md={4} sm={12} xs={12}>

                        <div className='image-card-container'>
                            <div className='image-card-collection overlap'>
                                <img className='new-image-collection' src={newImage} alt="Collection" />
                            </div>
                            <div className='collection-text-card'>
                                <h1 className='collections-heading'>Latest Collections</h1>
                                <p className='save-upto-para'>Save Upto 60%</p>
                                <Button className='collection-button-shop-now' variant="contained">Shop Now</Button>

                            </div>
                        </div>
                    </Grid>

                    <Grid item lg={8} md={8} sm={12} xs={12}>

                        <Grid container spacing={2}>

                            
                            <Grid item lg={6} md={6}sm={6} xs={12}>
                                <div className='mens-image-card-main-container'>
                                    <div className='mens-image-card-collection overlap iron-gallery-item'>
                                        <img className='new-image-collection' src={mensCollection} alt="Collection" />
                                    </div>
                                    <div className='mens-collection-text-card'>
                                        <h1 className='collections-heading'>Men's Collections</h1>
                                        <p className='save-upto-para'>Save Upto 40%</p>
                                        <Button className='collection-button-shop-now' variant="contained">Shop Now</Button>

                                    </div>
                                </div>
                            </Grid>


                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                <div className='mens-image-card-main-container'>
                                    <div className='mens-image-card-collection overlap iron-gallery-item'>
                                        <img className='new-image-collection' src={womensCollection} alt="Collection" />
                                    </div>
                                    <div className='mens-collection-text-card'>
                                        <h1 className='collections-heading'>Womens Collections</h1>
                                        <p className='save-upto-para'>Save Upto 30%</p>
                                        <Button className='collection-button-shop-now' variant="contained">Shop Now</Button>

                                    </div>
                                </div>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                <div className='mens-image-card-main-container'>
                                    <div className='mens-image-card-collection overlap iron-gallery-item'>
                                        <img className='new-image-collection' src={watchCollection} alt="Collection" />
                                    </div>
                                    <div className='mens-collection-text-card'>
                                        <h1 className='collections-heading'>Watches Collections</h1>
                                        <p className='save-upto-para'>Save Upto 50%</p>
                                        <Button className='collection-button-shop-now' variant="contained">Shop Now</Button>

                                    </div>
                                </div>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                <div className='mens-image-card-main-container'>
                                    <div className='mens-image-card-collection overlap iron-gallery-item'>
                                        <img className='new-image-collection' src={accessoriesCollection} alt="Collection" />
                                    </div>
                                    <div className='mens-collection-text-card'>
                                        <h1 className='collections-heading'>Accessories Collections</h1>
                                        <p className='save-upto-para'>Save Upto 60%</p>
                                        <Button className='collection-button-shop-now' variant="contained">Shop Now</Button>

                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Box>

        </div>
    );
};

export default Collections;