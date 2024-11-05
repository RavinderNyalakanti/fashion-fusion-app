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



const Mens = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);   
  const [sortOption, setSortOption] = useState("Featured");  
  const [selectedBrands, setSelectedBrands] = useState([]); 
  const [loading, setLoading] = useState(true); 



  useEffect(() => {
    setLoading(true);
    const fetchAllData = async () => {
      try {
        if (window.location.pathname === "/mens") {
          
        
        const shirtData = await fetch("https://dummyjson.com/products/category/mens-shirts");
        const watchData = await fetch("https://dummyjson.com/products/category/mens-watches");
        const shoeData = await fetch("https://dummyjson.com/products/category/mens-shoes");

        if (!shirtData || !watchData || !shoeData) {
          throw new Error("Fetching failed");
        }

        const shirtJson = await shirtData.json();
        const watchJson = await watchData.json();
        const shoeJson = await shoeData.json();

        const combinedProducts = [
          ...shirtJson.products,
          ...watchJson.products,
          ...shoeJson.products
        ];

        setProducts(combinedProducts);}
        
        else if (window.location.pathname === "/watches") {
          const watchData = await fetch("https://dummyjson.com/products/category/mens-watches");
          const watchData1 = await fetch("https://dummyjson.com/products/category/womens-watches");
          if (!watchData || !watchData1) {
            throw new Error("Fetching failed");
          }
          const watchJson = await watchData.json();
          const watchJson1 = await watchData1.json();

          const combinedProducts = [
            ...watchJson.products,
            ...watchJson1.products
          ]
          setProducts(combinedProducts);
        }


        else if (window.location.pathname.includes("/search/")) {
          console.log(window.location.pathname)
          const watchData = await fetch(`https://dummyjson.com/products/search?q=${window.location.pathname.split("/")[2]}`);
          if (!watchData ) {
            throw new Error("Fetching failed");
          }
          const watchJson = await watchData.json();

          const combinedProducts = [
            ...watchJson.products
          ]
          setProducts(combinedProducts);
          
        } 
        else if (window.location.pathname === "/sunglasses") {

          const glasessData = await fetch("https://dummyjson.com/products/category/sunglasses");

          if (!glasessData) {
            throw new Error("Fetching failed");
          } 

          const glasessJson = await glasessData.json();

          const combinedProducts = [
            ...glasessJson.products
          ] 
          setProducts(combinedProducts);
        }

        else if (window.location.pathname === "/clothing") {

          const menShirtData = await fetch("https://dummyjson.com/products/category/mens-shirts");
          const womenDresessData = await fetch("https://dummyjson.com/products/category/womens-dresses"); 
          const topsData = await fetch("https://dummyjson.com/products/category/tops");
          if (!menShirtData || !womenDresessData || !topsData) {
            throw new Error("Fetching failed");
          } 

          const menShirtJson = await menShirtData.json();
          const womenDresessJson = await womenDresessData.json();
          const topsJson = await topsData.json();

          const combinedProducts = [
            ...menShirtJson.products,
            ...womenDresessJson.products,
            ...topsJson.products
          ]
          setProducts(combinedProducts);
        }
        else if (window.location.pathname === "/new-collections") {

          const menShirtData = await fetch("https://dummyjson.com/products/category/mens-shirts");
          const menShoesData = await fetch("https://dummyjson.com/products/category/mens-shoes");
          const menWatchesData = await fetch("https://dummyjson.com/products/category/mens-watches");


          const womenDresessData = await fetch("https://dummyjson.com/products/category/womens-dresses"); 
          const womenWatchesData = await fetch("https://dummyjson.com/products/category/womens-watches"); 
          const womenShoesData = await fetch("https://dummyjson.com/products/category/womens-shoes"); 
          const womenJewelleryData = await fetch("https://dummyjson.com/products/category/womens-jewellery"); 
          const womenBagsData = await fetch("https://dummyjson.com/products/category/womens-bags"); 

          const sunglassesData = await fetch("https://dummyjson.com/products/category/sunglasses");
          const skinCaresData = await fetch("https://dummyjson.com/products/category/skin-care"); 
          const beautyData = await fetch("https://dummyjson.com/products/category/beauty"); 
          const frgancesData = await fetch("https://dummyjson.com/products/category/fragrances");
          

          if (!menShirtData || !womenDresessData || !womenJewelleryData || !womenBagsData || !sunglassesData || !skinCaresData || !beautyData || !frgancesData) {
            throw new Error("Fetching failed");
          } 

          const menShirtJson = await menShirtData.json(); 
          const menShoesJson = await menShoesData.json(); 
          const menWatchesJson = await menWatchesData.json();

          const womenDresessJson = await womenDresessData.json();
          const womenWatchesJson = await womenWatchesData.json();
          const womenShoesJson = await womenShoesData.json();
          const womenJewelleryJson = await womenJewelleryData.json();
          const womenBagsJson = await womenBagsData.json(); 

          const sunglassesJson = await sunglassesData.json();
          const skinCaresJson = await skinCaresData.json();
          const beautyJson = await beautyData.json();
          const frgancesJson = await frgancesData.json();

          const combinedProducts = [
            ...menShirtJson.products,
            ...menShoesJson.products,
            ...menWatchesJson.products,
            ...womenDresessJson.products,
            ...womenWatchesJson.products,
            ...womenShoesJson.products,
            ...womenJewelleryJson.products,
            ...womenBagsJson.products,
            ...sunglassesJson.products,
            ...skinCaresJson.products,
            ...beautyJson.products,
            ...frgancesJson.products
          ]
          setProducts(combinedProducts);
        }





      } 
      catch (error) {
        console.error("Error when fetching the data", error);
      }
      setLoading(false);
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
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(each.brand);
    return matchesSearch && matchesBrand;
  });


  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])

  return (  
    <div>
    { loading?
      <div style={{ 
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
                <CardContent size="small">
                  <Typography sx={{ fontSize: 9 }} color="text.secondary" gutterBottom>
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
          <Grid item lg={12} md={12} sm={7} xs={12}>

<Grid container spacing={1}>
  {filteredProducts.map((product) => (
    <Grid item lg={3} md={3} sm={6} xs={12} key={product.id}>
      <Card className="category-products-list">
        <Link  to={`product/${product.id}`} replace>
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
    </div>
  }  
  </div>
  );
};

export default Mens;
