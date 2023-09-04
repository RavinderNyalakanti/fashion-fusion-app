
import './App.css'; 
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Main from './components/Main'; 
import Home from './components/Home'
import Shop from './components/Shop'
import Category from './components/Category'
import Accessories from './components/Accessories';
import AdminPanel from './components/AdminPanel';
import ContactUs from './components/ContactUs';
import CheckOut from './components/Shop/CheckOut';
import Payment from './components/Shop/Payment/payment';
import Cart from './components/Shop/Cart/cart';
// import  Login  from './components/Login'

import {useState, useEffect} from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import ProductsDetails from './components/Shop/ProductDetails/ProductsDetails';
// import ProductsDetails from './components/Shop/ProductDetails/ProductsDetails';

const color = [
  '#290af6'
]


function App() {

  const [loading , setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])

  return (
    
    <div className="App">

      {
        loading?
        <PropagateLoader style={{marginTop:'10px'}} color={color} loading={loading} size={10}/>
        :
      <Router>  
      <Main/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shoping' element={<Shop/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/admin-panel' element={<AdminPanel/>}/>
        <Route path='/product-details' element={<ProductsDetails/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/payment-details' element={<Payment/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </Router>
      }

      
    </div>
  );
}

export default App;
