import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main'; 
import Home from './components/Home';
import Shop from './components/Shop';
import Category from './components/Category';
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
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <CartProvider className="App">
      {loading ? (
        <PropagateLoader style={{ marginTop: '10px' }} color={color} loading={loading} size={10} />
      ) : (
        <Router>  
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/shopping' element={<Shop />} />
            <Route path='/mens' element={<Mens />} />
            <Route path='/watches' element={<Mens />} />
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
            <Route path='mens/product/:id' element={<ProductsDetails />} /> 
            <Route path='womens/product/:id' element={<ProductsDetails />} /> 
            <Route path='search/:id/product/:id' element={<ProductsDetails />} /> 
          
          </Routes>
        </Router>
      )}
    </CartProvider>
  );
}

export default App;
