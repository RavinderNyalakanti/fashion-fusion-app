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
            <Route path="/shopping" element={isLoggedIn ? <Shop /> : <Navigate to="/login" />} />
            <Route path="/mens" element={isLoggedIn ? <Mens /> : <Navigate to="/login" />} />
            <Route path="/watches" element={isLoggedIn ? <Mens /> : <Navigate to="/login" />} />
            <Route path="/shoes" element={isLoggedIn ? <ProductsDetails /> : <Navigate to="/login" />} />
            <Route path="/womens" element={isLoggedIn ? <Womens /> : <Navigate to="/login" />} />
            <Route path="/category" element={isLoggedIn ? <Accessories /> : <Navigate to="/login" />} />
            <Route path="/all-accessories" element={isLoggedIn ? <Accessories /> : <Navigate to="/login" />} />
            <Route path="/admin/reports" element={isLoggedIn ? <AdminPanel /> : <Navigate to="/login" />} />
            <Route path="/contact" element={isLoggedIn ? <ContactUs /> : <Navigate to="/login" />} />
            <Route path="/checkout" element={isLoggedIn ? <CheckOut /> : <Navigate to="/login" />} />
            <Route path="/payment-details" element={isLoggedIn ? <Payment /> : <Navigate to="/login" />} />
            <Route path="/cart" element={isLoggedIn ? <Cart /> : <Navigate to="/login" />} />  
            <Route path="/order-placed" element={isLoggedIn ? <OrderPlaced /> : <Navigate to="/login" />} />
            <Route path="/product/:id" element={isLoggedIn ? <ProductsDetails /> : <Navigate to="/login" />} /> 
            <Route path="category/product/:id" element={isLoggedIn ? <ProductsDetails /> : <Navigate to="/login" />} /> 
            <Route path="mens/product/:id" element={isLoggedIn ? <ProductsDetails /> : <Navigate to="/login" />} /> 
            <Route path="womens/product/:id" element={isLoggedIn ? <ProductsDetails /> : <Navigate to="/login" />} /> 
            <Route path="search/:id/product/:id" element={isLoggedIn ? <ProductsDetails /> : <Navigate to="/login" />} /> 
          </Routes>
        </Router>
      )}
    </CartProvider>
  );
}

export default App;
