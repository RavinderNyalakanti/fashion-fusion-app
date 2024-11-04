import React, { useState, useEffect} from "react";
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

// Sorting options
const currencies = [
  { value: "Featured", label: "Featured" },
  { value: "Lowest Price", label: "Lowest Price" },
  { value: "Highest Price", label: "Highest Price" },
]; 
const color = [
  '#290af6'
]

// Brand options (could be updated if API returns more brands)


// API endpoints for different categories
const categoryAPIs = { 
  "All Accessories": null,
  "Kitchen Accessories": "https://dummyjson.com/products/category/kitchen-accessories",
  "Home Decoration": "https://dummyjson.com/products/category/home-decoration",
  "Groceries": "https://dummyjson.com/products/category/groceries",
  "Furniture": "https://dummyjson.com/products/category/furniture",
  "Fragrances": "https://dummyjson.com/products/category/fragrances",
  "Beauty": "https://dummyjson.com/products/category/beauty",
  "Laptops": "https://dummyjson.com/products/category/laptops",
  "MensShirt": "https://dummyjson.com/products/category/mens-shirts",
  "MensShoes": "https://dummyjson.com/products/category/mens-shoes",
  "Mobile Accessories": "https://dummyjson.com/products/category/mobile-accessories",
  "Sports Accessories": "https://dummyjson.com/products/category/sports-accessories",
  "Motorcycle  ": "https://dummyjson.com/products/category/motorcycle",
};

const Accessories = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("Featured");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Accessories"); 
  const [loading, setLoading] = useState(false);


  // Fetch products based on the selected category
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let fetchedProducts = [];

        if (selectedCategory === 'All Accessories') {
          // Fetch products from accessory-related categories
          const responses = await Promise.all([
            fetch(categoryAPIs["Kitchen Accessories"]),
            fetch(categoryAPIs["Mobile Accessories"]),
            fetch(categoryAPIs["Sports Accessories"]),
            fetch(categoryAPIs["Home Decoration"]),
          ]);
          
          const productsData = await Promise.all(responses.map(res => res.json()));
          fetchedProducts = productsData.flatMap(data => data.products);
        } 

        else {
          // Fetch products based on the selected category
          const response = await fetch(categoryAPIs[selectedCategory]);
          const data = await response.json();
          fetchedProducts = data.products;
        } 

        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
      setLoading(false);
    };
    
    fetchProducts();
  }, [selectedCategory]);



  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // const handleBrandChange = (e) => {
  //   const brand = e.target.name;
  //   setSelectedBrands((prevBrands) =>
  //     prevBrands.includes(brand)
  //       ? prevBrands.filter((b) => b !== brand)
  //       : [...prevBrands, brand]
  //   );
  // };


  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "Lowest Price") {
      return a.price - b.price;
    } else if (sortOption === "Highest Price") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });



  const filteredProducts = sortedProducts.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    return matchesSearch && matchesBrand;
  }); 



  useEffect(() => {
    setLoading(true); 
    setTimeout(() => {
      setLoading(false);
    },2000)
  }, []);

  return ( 
   <div > 
     {
      loading ? <div style={{ 
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
             {/* Filters Section */}
             <Grid item lg={3} md={3} sm={5} xs={12}>
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
      
               {/* Category Selection */}
              
      
              
             </Grid> 
      
              <Grid item lg={3} md={3} sm={5} xs={12}>
                       <Card className="accessrios_select_category">
                         <CardContent>
                         
                           <TextField
                             id="outlined-select-category"
                             select
                             label="Category"
                             value={selectedCategory}
                             onChange={handleCategoryChange}
                             fullWidth
                           >
                             {Object.keys(categoryAPIs).map((category) => (
                               <MenuItem key={category} value={category}>
                                 {category}
                               </MenuItem>
                             ))}
                           </TextField>
                         </CardContent>
                       </Card> 
             </Grid> 
      
             <Grid item lg={3} md={3} sm={5} xs={12}>
                   <Card className="product_prices">
                     <CardContent>
                       <TextField
                         id="outlined-select-currency"
                         select
                         label="Sort By"
                         value={sortOption}
                         onChange={handleSortChange}
                         fullWidth
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
      
      
             <Grid item lg={3} md={3} sm={5} xs={12}>
               <div className="product-contente">
                 <h3 className="result-found-heading">{filteredProducts.length} results found</h3>
               </div>
             </Grid>
      
             {/* Product List Section */}
             <Grid item lg={12} md={12} sm={12} xs={12}>
               
      
               {/* Displaying Products */}
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
           </Grid>
         </Box>
       </div>
          </div> 
          
     }
</div>  
  );
};

export default Accessories;
