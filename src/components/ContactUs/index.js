import React from 'react';
import './index.css'
// import image from '../../assets/images/collections/contact-us-image.jpg'
import MapContainer from '../MapContainer';
import Footer from '../Footer'

// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
// import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';


const ContactUs = () => {

    return (
        <div className='contact-main-container'>
            <div className='contact-background-image-container'>
                <h1>Contact Us</h1>
                <p>Share Your Feedback With Us.</p>
            </div>

            <div className='map-main-container'>
                <MapContainer />
            </div>
            <div className='contact-and-form-details-container'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item lg={4} xs={12}>
                            <div className='contact-info-container'>
                                <h1 className='contact-info-heading'>Contact Info</h1>
                                <p className='contact-info-para'>If You Have Any Problems,Suggestions And Feedback Then Please Feel Free To Contact With Us. Choose Our Communication Soruces. We Will Love To Hear From You.</p>
                                <div className='call-mail-container'>
                                    <h1>Call</h1>
                                    <p>+9640189281</p>
                                </div>
                                <div className='call-mail-container'>
                                    <h1>Mail</h1>
                                    <p>ravindernyalakanti8@gmail.com</p>
                                </div>
                                <div className='call-mail-container'>
                                    <h1>Address</h1>
                                    <p>vivekanada colony, 5000010,Hyderabad</p>
                                </div>
                            </div>
                        </Grid>

                        <Grid item lg={8} xs={12}>
                            <div className='form-main-container'>
                                <h1 className='write-to-us-heading'>Write To Us</h1>
                                <form>

                                    <div>
                                        <TextField id="standard-basic" label="FirstName" variant="standard" />
                                    </div>

                                    <div>
                                        <TextField id="standard-basic" label="LastName" variant="standard" />
                                    </div>

                                    <div>
                                        <TextField id="standard-basic" label="Email" variant="standard" />
                                    </div>

                                    <div>
                                        <TextField id="standard-basic" label="Subject" variant="standard" />
                                    </div>

                                    <div>
                                        <TextField  style={{ color: '#ff5722' }} id="standard-basic" label="Leave A Message" variant="standard" />
                                    </div>

                                    <div className='send-message-button'>
                                        <Button
                                            className='send-msg-btn'
                                            variant="contained"
                                            style={{ backgroundColor: '#ff5722', color: 'white' }}
                                        >
                                            Send Message
                                        </Button>
                                    </div>

                                </form>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;