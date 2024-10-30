import React, { useState } from "react";
import "./index.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardMedia } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import MenuItem from "@mui/material/MenuItem";

import insignia from "../../assets/images/accessories2/5477500_sb.jpg";
import insignia2 from "../../assets/images/accessories2/4397400_sb.jpg";
import insignia3 from "../../assets/images/accessories2/5588602_sb.jpg";
import { Link } from "react-router-dom";

// import accessorisCategory  from "./accessorisCategory";
const currencies = [
  {
    value: "Featured",
    label: "Featured",
  },
  {
    value: "Lowest Price",
    label: "Lowest Price",
  },
  {
    value: "Highest Price",
    label: "Highest Price",
  },
];


const accessorisCategoryImages = [
  {
      id:1,
      image: insignia,
      productTitle: 'Amazon - Fire TV Stick with Alexa Voice Remote - Black',
      productPricing: 39.99,
      productRating: 4.5, 
      brand:'Amazon'
  },
  {
      id:2,
      image: insignia2,
      productTitle: 'Google - Chromecast - Black',
      productPricing: 35.99,
      productRating: 4.5, 
      brand:'Google'
  },
  {
      id:3,
      image: insignia3,
      productTitle: 'Dell - Inspiron 15.6" Touch-Screen Laptop - Intel Core i5 - 6GB Memory - 1TB Hard Drive - Black',
      productPricing: 499.99,
      productRating: 4.5, 
      brand: 'Dell'
  },
 
]
const brands = [
  "Amazon",
  "Samsung",
  "HP",
  "Dell",
  "Apple",
  "Google"
];

const Accessories = () => {
 const [search,setSearch] =useState('')
 const [product,setProduct] =useState(accessorisCategoryImages);   
 const [sortOption,setSortOption] = useState('Featured');  
 const [selectedBrands,setSelectedBrands] = useState([]); 

 const handleSortChange = (e)=>{
     setSortOption(e.target.value)
 }   

 const handleBrandChange = (e)=>{
     const  brand = e.target.name; 
     setSelectedBrands(prevBrand=>{
         if (prevBrand.includes(brand)){
             return prevBrand.filter(b=> b!==brand);
         } 
         else{
            return [...prevBrand,brand]
         }
     })
 } 

 const sortedPorducts = [...product].sort((a,b)=>{
          if (sortOption==='Lowest Price'){
              return a.productPricing - b.productPricing
          } 
          else if (sortOption === 'Highest Price'){
               return b.productPricing - a.productPricing
          } 
          else{
            return 0;
          }
 })

 const filteredProducts = sortedPorducts.filter((each)=>{
         const matchesSearch = each.productTitle.toLowerCase().includes(search
          .toLowerCase()
         ) 
         const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(each.brand); 
         return matchesSearch && matchesBrand
 }) 

  return (
    <div className="accessoris-section">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>

          <Grid item lg={3} md={3} sm={5} xs={12}>
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
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
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
                  <FormGroup className="list-ofcheck"> 
                  {brands.map((brand)=>(
                          <FormControlLabel 
                          key={brand}
                          control={<Checkbox name={brand} checked={selectedBrands.includes(brand)} onChange={handleBrandChange} />}
                          label={brand}
                        />
                  ))    
                  }
                  </FormGroup>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={9} md={9} sm={7} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <Card className="product_prices">
                  <CardContent>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Featured" 
                      value={sortOption} 
                      onChange={handleSortChange}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={8} md={12} sm={12} xs={12}>
                <div className="product-contente">
                  <h3>18,047 results found in 10ms</h3>
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={2}>

            {filteredProducts.map((path) => (
              <Grid item lg={4} md={4} sm={6} xs={12} key={path.id}>
                {/* <div> */}
                  <Card className="category-products-list">
                    <Link  to={`product/${path.id}`}>
                    <CardActionArea>
                      <CardMedia
                        className="product-imgs"
                        component="img"
                        image={path.image}
                        alt={path.productTitle}
                      />
                      <hr />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className="accessrios_category_title"
                        >
                          {path.productTitle}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <div className="category-products-pricing">
                                <p>$ {path.productPricing}</p>
                              </div>
                            </Grid>
                            <Grid item xs={6}>
                              <div className="category-products-ratings">
                                <Stack spacing={1}>
                                  <Rating
                                    name="half-rating-read"
                                    defaultValue={path.productRating}
                                    precision={0.5}
                                    readOnly
                                  />
                                </Stack>
                              </div>
                            </Grid>
                          </Grid>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    </Link>

                  </Card>
                {/* </div> */}
              </Grid>
             
             ))}
            </Grid>
          </Grid>

        </Grid>
      </Box>
    </div>  
  );
};

export default Accessories;
