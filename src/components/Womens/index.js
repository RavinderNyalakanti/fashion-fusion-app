import React, { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

import PropagateLoader from "react-spinners/PropagateLoader";

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

const color = [
  '#290af6'
]

const Womens = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);   
  const [sortOption, setSortOption] = useState("Featured");  
   
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        // Fetch women's product categories
        const womensBagsData = await fetch("https://dummyjson.com/products/category/womens-bags");
        const womensDressesData = await fetch("https://dummyjson.com/products/category/womens-dresses");
        const womensJewelleryData = await fetch("https://dummyjson.com/products/category/womens-jewellery");
        const womensShoesData = await fetch("https://dummyjson.com/products/category/womens-shoes");
        const womensWatchesData = await fetch("https://dummyjson.com/products/category/womens-watches");
  
        // Check if any of the responses are not okay
        if (!womensBagsData.ok || !womensDressesData.ok || !womensJewelleryData.ok || !womensShoesData.ok || !womensWatchesData.ok) {
          throw new Error("Fetching failed");
        }
  
        // Parse the JSON data
        const womensBagsJson = await womensBagsData.json();
        const womensDressesJson = await womensDressesData.json();
        const womensJewelleryJson = await womensJewelleryData.json();
        const womensShoesJson = await womensShoesData.json();
        const womensWatchesJson = await womensWatchesData.json();
  
        // Combine the products
        const combinedProducts = [
          ...womensBagsJson.products,
          ...womensDressesJson.products,
          ...womensJewelleryJson.products,
          ...womensShoesJson.products,
          ...womensWatchesJson.products
        ];
  
        // Set the products
        setProducts(combinedProducts); 
  
        // Check for the current path
        if (window.location.pathname === "/shoes") {
          const shoesDataMen = await fetch("https://dummyjson.com/products/category/mens-shoes");
          const shoesDataWomen = await fetch("https://dummyjson.com/products/category/womens-shoes"); 
  
          // Check if the responses are okay
          if (!shoesDataMen.ok || !shoesDataWomen.ok) {
            throw new Error("Fetching failed");
          }
  
          // Parse the shoe data
          const shoesDataMenJson = await shoesDataMen.json();
          const shoesDataWomenJson = await shoesDataWomen.json();
          
          // Combine the shoe products
          const combinedShoeProducts = [
            ...shoesDataMenJson.products,
            ...shoesDataWomenJson.products
          ];
  
          // Set the combined shoe products
          setProducts(combinedShoeProducts);
        }
        else if (window.location.pathname === "/gadgets") {
         
          const tabletsData = await fetch("https://dummyjson.com/products/category/tablets"); 
          const smartphonesData = await fetch("https://dummyjson.com/products/category/smartphones"); 
          const laptopsData = await fetch("https://dummyjson.com/products/category/laptops");  
          const vehiclesData = await fetch("https://dummyjson.com/products/category/vehicle");
          const motorcycleData = await fetch("https://dummyjson.com/products/category/motorcycle"); 
  
          // Check if the responses are okay
          if (!vehiclesData.ok || !tabletsData.ok || !smartphonesData.ok || !laptopsData.ok || !motorcycleData.ok) {
            throw new Error("Fetching failed");
          }
  
          // Parse the shoe data
          const vehiclesDataJson = await vehiclesData.json();
          const tabletsDataJson = await tabletsData.json();
          const smartphonesDataJson = await smartphonesData.json();
          const laptopsDataJson = await laptopsData.json();
          const motorcycleDataJson = await motorcycleData.json();
          
          // Combine the shoe products
          const combinedShoeProducts = [
            ...vehiclesDataJson.products,
            ...tabletsDataJson.products,
            ...smartphonesDataJson.products,
            ...laptopsDataJson.products,
            ...motorcycleDataJson.products
          ];
  
          // Set the combined shoe products
          setProducts(combinedShoeProducts);
        }




        else if (window.location.pathname === "/accessories") {
          const sunglassesData = await fetch("https://dummyjson.com/products/category/sunglasses");
          const kitchenData = await fetch("https://dummyjson.com/products/category/kitchen-accessories");
          const mobileAccessoriesData = await fetch("https://dummyjson.com/products/category/mobile-accessories");
          const sportsAccessoriesData = await fetch("https://dummyjson.com/products/category/sports-accessories");

          const womenJewelleryData = await fetch("https://dummyjson.com/products/category/womens-jewellery"); 
          const womensWatchesData = await fetch("https://dummyjson.com/products/category/womens-watches"); 
          const womensBagsData = await fetch("https://dummyjson.com/products/category/womens-bags"); 
          const womensShoesData = await fetch("https://dummyjson.com/products/category/womens-shoes"); 


          const mensWatchesData = await fetch("https://dummyjson.com/products/category/mens-watches"); 
          const mensShoesData = await fetch("https://dummyjson.com/products/category/mens-shoes"); 
          const mensBagsData = await fetch("https://dummyjson.com/products/category/mens-bags"); 
          const mensJewelleryData = await fetch("https://dummyjson.com/products/category/mens-jewellery");

          if(   
            !sunglassesData.ok || !kitchenData.ok || !mobileAccessoriesData.ok || !sportsAccessoriesData.ok ||
            !womenJewelleryData.ok || !womensWatchesData.ok || !womensBagsData.ok || !womensShoesData.ok ||
            !mensWatchesData.ok || !mensShoesData.ok || !mensBagsData.ok || !mensJewelleryData.ok
          ) {
            throw new Error("Fetching failed");
          }

          const sunglassesJson = await sunglassesData.json();
          const kitchenJson = await kitchenData.json();
          const mobileAccessoriesJson = await mobileAccessoriesData.json();
          const sportsAccessoriesJson = await sportsAccessoriesData.json();

          const womenJewelleryJson = await womenJewelleryData.json();
          const womensWatchesJson = await womensWatchesData.json();
          const womensBagsJson = await womensBagsData.json();
          const womensShoesJson = await womensShoesData.json();

          const mensWatchesJson = await mensWatchesData.json();
          const mensShoesJson = await mensShoesData.json();
          const mensBagsJson = await mensBagsData.json();
          const mensJewelleryJson = await mensJewelleryData.json();

          const combinedProducts = [
            ...sunglassesJson.products,
            ...kitchenJson.products,  
            ...mobileAccessoriesJson.products,
            ...sportsAccessoriesJson.products,
            ...womenJewelleryJson.products,
            ...womensWatchesJson.products,
            ...womensBagsJson.products,
            ...womensShoesJson.products,
            ...mensWatchesJson.products,
            ...mensShoesJson.products,
            ...mensBagsJson.products,
            ...mensJewelleryJson.products
          ];
          
          setProducts(combinedProducts);
        }
      

      } catch (error) {
        console.error("Error when fetching the data", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchAllData();
  }, []);
  

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // const handleBrandChange = (e) => {
  //   const brand = e.target.name;
  //   setSelectedBrands((prevBrands) => {
  //     if (prevBrands.includes(brand)) {
  //       return prevBrands.filter((b) => b !== brand);
  //     } else {
  //       return [...prevBrands, brand];
  //     }
  //   });
  // };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "Lowest Price") {
      return a.price - b.price;
    } else if (sortOption === "Highest Price") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  const filteredProducts = sortedProducts.filter((each) => {
    const matchesSearch = each.title.toLowerCase().includes(search.toLowerCase());
    
    return matchesSearch 
  });

  // if (loading) {
  //   return <div>
  //     <p>Loading...
  //       </p></div>;
  // } 
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  },[])

  return (  
    
    <div> 
      {loading?  <div style={{ 
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
     <div> 
      <Navbar/>
    <div className="accessoris-section">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {/* Filter Section */}
          <Grid item lg={4} md={4} sm={5} xs={12}>
            <Card className="accessrios_select_category">
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  <TextField
                    id="standard-basic"
                    label="Search Products"
                    variant="standard"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Typography>
              </CardContent>
            </Card>
           
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
                <Card className="product_prices">
                  <CardContent>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Sort By"
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
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <div className="product-contente">
                  <h3>{filteredProducts.length} results found</h3>
                </div>
              </Grid>


          {/* Product List Section */}
         
        </Grid> 

          <Grid item lg={12} md={12} sm={12} xs={12}>
      
            <Grid container spacing={2}>
              {filteredProducts.map((product) => (
                <Grid item lg={3} md={3} sm={6} xs={12} key={product.id}>
                  <Card className="category-products-list">
                    <Link to={`product/${product.id}`}>
                      <CardActionArea>
                        <CardMedia
                          className="product-imgs"
                          component="img"
                          image={product.thumbnail}
                          alt={product.title}
                        />
                        <hr />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="accessrios_category_title"
                          >
                            {product.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <Grid container spacing={2}>
                              <Grid item xs={6}>
                                <div className="category-products-pricing">
                                  <p>$ {product.price}</p>
                                </div>
                              </Grid>
                              <Grid item xs={6}>
                                <div className="category-products-ratings">
                                  <Stack spacing={1}>
                                    <Rating
                                      name="half-rating-read"
                                      defaultValue={product.rating}
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
                </Grid>
              ))}
            </Grid>
          </Grid>
      </Box>
    </div>
     </div> }
   </div>
    
  );
};

export default Womens;
