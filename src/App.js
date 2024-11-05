import './App.css'; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Accessories from './components/Accessories';
import AdminPanel from './components/AdminPanel';
import ContactUs from './components/ContactUs';
import CheckOut from './components/Shop/CheckOut';
import Payment from './components/Shop/Payment/payment';
import Cart from './components/Shop/Cart/cart';
import Login from './components/Login';
import Register from './components/Register'; 
import { OrderPlaced } from './components/OrderPlaced';
import { useState, useEffect } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import ProductsDetails from './components/ProductDetails/ProductsDetails';
import Mens from './components/Mens';
import Womens from './components/Womens';
import { CartProvider } from './components/Context/CartContext';

const color = ['#290af6'];

function App() {
  const [loading, setLoading] = useState(false);

  // Check if user is logged in
  const isLoggedIn = !!localStorage.getItem('token');

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <CartProvider className="App"> 
 
     

      {loading ? (
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
        </div>) : (
        <Router>  
          <Routes>
            {/* Default to Login page if not logged in */}
            <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} />

            {/* Authentication routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected routes */}
            <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
            <Route path='/search' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/shopping' element={<Shop />} />
            <Route path='/mens' element={<Mens />} />
            <Route path='/watches' element={<Mens />} />

            <Route path='/clothing' element={<Mens />} />
            <Route path='/new-collections' element={<Mens />} />

            <Route path='/accessories' element={<Womens />} />
            <Route path='/gadgets' element={<Womens />} />


            <Route path='/sunglasses' element={<Mens />} />
            <Route path='/search/:category' element={<Mens />} />
            <Route path='/shoes' element={<Womens />} />
            <Route path='/womens' element={<Womens />} />
            <Route path='/category' element={<Accessories />} />
            <Route path='/all-accessories' element={<Accessories />} />
            <Route path='/admin/reports' element={<AdminPanel />} />
            <Route path='/product-details' element={<ProductsDetails />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/payment-details' element={<Payment />} />
            <Route path='/cart' element={<Cart />} />  
            <Route path='/order-placed' element={<OrderPlaced />} />
            <Route path="/product/:id" element={<ProductsDetails />} /> 

            <Route path='category/product/:id' element={<ProductsDetails />} /> 
            <Route path='shoes/product/:id' element={<ProductsDetails />} /> 
            <Route path='mens/product/:id' element={<ProductsDetails />} /> 
            <Route path='womens/product/:id' element={<ProductsDetails />} /> 

            <Route path='watches/product/:id' element={<ProductsDetails />} /> 
            <Route path='new-collections/product/:id' element={<ProductsDetails />} /> 
            <Route path='/clothing/product/:id' element={<ProductsDetails />} /> 
            <Route path='/clothing/product/:id' element={<ProductsDetails />} /> 
            <Route path='/accessories/product/:id' element={<ProductsDetails />} /> 
            <Route path='/gadgets/product/:id' element={<ProductsDetails />} /> 
            <Route path='/all-accessories/product/:id' element={<ProductsDetails />} /> 

            <Route path='search/:id/product/:id' element={<ProductsDetails />} /> 
          </Routes>
        </Router>
      )}
    </CartProvider>
  );
}

export default App;
