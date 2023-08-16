import React from "react";
import './index.css'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';




const Accessories = () => {
  return (
    <div className="accessoris-section">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={3}>
            
            <Card className="accessrios_select_category">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <TextField
                    id="standard-basic"
                    label="Search Products"
                    variant="standard"
                  />
                </Typography>
              </CardContent>
            </Card>
            <Card className="accessrios_select_category">
              <CardContent>
                <h3>Brand</h3>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Insignia™" />
                    <FormControlLabel required control={<Checkbox />} label="Samsung" />
                    <FormControlLabel required control={<Checkbox />} label="HP" />
                    <FormControlLabel required control={<Checkbox />} label="Metra" />
                    <FormControlLabel required control={<Checkbox />} label="Apple" />
                   
                </FormGroup>




                </Typography>
              </CardContent>
            </Card>




          </Grid>



          <Grid item xs={9}>
            <h1>xs=8</h1>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Accessories;
