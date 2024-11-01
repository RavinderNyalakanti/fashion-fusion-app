import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import paymentsImage from "../assets/images/payments.png";


const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item lg={4} md={4} sm={12} className="footer-about">
              <div className="footer-widget-title mb-30">
                <h6>about company</h6>
              </div>
              <p>
                Here you can use rows and columns here to organize your footer
                content.Lorem ipsum dolor sit amet,consectetur adipisicing elit.
                Here you can use rows and columns here to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </Grid>

            <Grid item lg={8} md={8} sm={12}>
              <Grid container spacing={1}>
                <Grid item lg={3} md={3} sm={6}>
                  <div className="footer-widget-title mb-30">
                    <h6>about</h6>
                  </div>
                  <List>
                    <ListItemButton>
                      <ListItemText primary="About Us" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="Terms and condition" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="Privacy policy" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="FAQ" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="contact us" />
                    </ListItemButton>
                  </List>
                </Grid>
                <Grid item lg={3} md={3} sm={6}>
                  <div className="footer-widget-title mb-30">
                    <h6>session</h6>
                  </div>

                  <List>
                    <ListItemButton>
                      <ListItemText primary="Sign in" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="Register" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="Forget password" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="Thank you" />
                    </ListItemButton>
                  </List>
                </Grid>
                <Grid item lg={3} md={3} sm={6}>
                  <div className="footer-widget-title mb-30">
                    <h6> categories</h6>
                  </div>
                  <List>
                    <ListItemButton>
                      <ListItemText primary="Women" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="Men" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="Accessories" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="Gadgets" />
                    </ListItemButton>
                  </List>
                </Grid>
                <Grid item lg={3} md={3} sm={6}>
                  <div className="footer-widget-title mb-30">
                    <h6>social</h6>
                  </div>
                  <List>
                    <ListItemButton>
                      <ListItemText primary="Facebook" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="Twitter" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="Youtube" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="Google plus" />
                    </ListItemButton>
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <hr />
      </div>

      <div className="copy-right-box">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <div className="copy-right-pay">
                <img src={paymentsImage} alt="payments" />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="copry-tight-content">
                <p>
                © All Rights Reversed | Fasihon Fusion
                </p>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Footer;
