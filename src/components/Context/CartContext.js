// src/context/CartContext.js
import React, { createContext, useState } from 'react'; 
import Cart from '../Shop/Cart/cart';

// Create the CartContext
export const CartContext = createContext();

// CartContext Provider component
export const CartProvider = ({ children }) => {
  const [cartList, setCartItems] = useState([Cart]); 
  console.log(cartList); 

  return (
    <CartContext.Provider value={{ cartList, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
