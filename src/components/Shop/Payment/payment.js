import './payment.css'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/* grids*/
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

/*textfeild*/
// eslint-disable-next-line import/first
import TextField from '@mui/material/TextField'; 

/*button */ 
// eslint-disable-next-line import/first
import Button from '@mui/material/Button';

const Payment = () => {

    return (
        <div className="payment-main-container">

            <div className="payment-image-container">
                <h1>Payment Information</h1>
            </div>

            <div className="shipping-details-container">
                <div>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ backgroundColor: '#0b91de', height: '60px' }}

                        >
                            <Typography style={{ color: '#fff' }}>
                                Enter Your Shipping Address
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={3}>
                                        <Grid item lg={4} sm={6} xs={12}>
                                            <Item >
                                                <TextField style={{
                                                    width: '100%',
                                                    backgroundColor: 'transparent', // Set the background color to transparent
                                                    boxShadow: 'none', // Remove the box shadow
                                                }} id="standard-basic" label="First Name" variant="standard" />

                                            </Item>
                                        </Grid>
                                        <Grid item lg={4} sm={6} xs={12}>
                                            <Item>      <TextField style={{ width: '100%',color:'#ffffff'}} id="standard-basic" label="Last Name" variant="standard" />
                                            </Item>
                                        </Grid>
                                        <Grid item lg={4} sm={6} xs={12} >
                                            <Item>
                                                <TextField style={{ width: '100%' }} id="standard-basic" label="Streat Name Or Number" variant="standard" />

                                            </Item>
                                        </Grid>
                                        <Grid item lg={6} sm={6} xs={12} >
                                            <Item>
                                                <TextField style={{ width: '100%' }} id="standard-basic" label="Apt Building Name" variant="standard" />

                                            </Item>
                                        </Grid>
                                        <Grid item lg={6} sm={6} xs={12} >
                                            <Item>
                                                <TextField style={{ width: '100%' }} id="standard-basic" label="Zip Code" variant="standard" />

                                            </Item>
                                        </Grid>
                                        <Grid item lg={6} sm={6} xs={12} >
                                            <Item>
                                                <TextField style={{ width: '100%' }} id="standard-basic" label="City And State" variant="standard" />

                                            </Item>
                                        </Grid>
                                        <Grid item lg={6} sm={6} xs={12} >
                                            <Item>
                                                <TextField style={{ width: '100%' }} id="standard-basic" label="Country" variant="standard" />

                                            </Item>
                                        </Grid>
                                    </Grid>
                                </Box>




                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                    <h1 style={{ marginLeft: '7px', textAlign: 'left', fontSize:'1.3rem' ,marginTop: '60px', paddingTop: '40px', lineHeight: '2rem' }}>Enter Your Contact Information</h1>
                                    <Box style={{ marginTop: '40px' }} sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item md={6} sm={6} xs={12}>
                                                <Item>
                                                    <TextField style={{ width: '100%' }} id="standard-basic" label="Mobile No" variant="standard" />

                                                </Item>
                                            </Grid>
                                            <Grid item md={6} sm={6} xs={12}>
                                                <Item>
                                                    <TextField style={{ width: '100%' }} id="standard-basic" label="Email" variant="standard" />

                                                </Item>
                                            </Grid>

                                        </Grid>
                                    </Box>
                                </div>

                                <div style={{marginLeft:'7px',display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>  
                                    <div style={{marginTop:'50px'}}>
                                    <h3 style={{textAlign: 'left'}}>Share With Other?</h3>
                                    <p style={{textAlign: 'left',marginTop:'20px'}}>If you want to share order and shipping details with someone else then enter the email of that person. We will send order updates to this email also.

                                    </p>
                                    </div>
                                    <div>
                                    <Box style={{ marginTop: '40px' }} sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item md={6} sm={6} xs={12}>
                                                <Item>
                                                    <TextField style={{ width: '100%' }} id="standard-basic" label="Email" variant="standard" />
                                                </Item>
                                            </Grid>


                                        </Grid>
                                    </Box>
                                    </div>
                                    <div style={{textAlign:'left',marginTop:'30px'}}>
                                <Button variant="contained" href="#contained-buttons" color='warning'>Continue To Payment</Button>
                                </div>
                                </div>  

                                
                               

                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion disabled>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                            aria-controls="panel3a-content"
                            id="panel3a-header" style={{
                                backgroundColor: '#0b91de', // Background color
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Shadow effect 
                                height: '60px'
                            }}
                        >
                            <Typography style={{ color: '#fff' }}>Unlock Offers Or Apply PromoCodes</Typography>
                        </AccordionSummary>
                    </Accordion>

                    <Accordion disabled>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                            aria-controls="panel3a-content"
                            id="panel3a-header" style={{
                                backgroundColor: '#0b91de', // Background color
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Shadow effect 
                                height: "60px"
                            }}
                        >
                            <Typography style={{ color: '#fff' }}>Payment Options</Typography>
                        </AccordionSummary>
                    </Accordion>
                </div>
            </div>

        </div>
    )
}

export default Payment