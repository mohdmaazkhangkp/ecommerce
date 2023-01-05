import React, { useReducer, useState } from 'react'
import { createContext } from 'react';
export const Cart = createContext();
const CartContextProvider = (props) => {
  useReducer()
    const [cart, setCart] = useState([]);
    const [badgeNumber, setBadgeNumber] = useState(0);
  return (
    
    <Cart.Provider value={{cart, setCart, badgeNumber, setBadgeNumber}}>{props.children}</Cart.Provider>
  )
}

export default CartContextProvider