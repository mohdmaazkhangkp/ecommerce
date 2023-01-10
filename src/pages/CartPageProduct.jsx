import React, { useContext, useEffect, useState } from 'react'
import classes from './CartPage.module.css'
import { Add, Remove } from '@mui/icons-material'
import { Cart } from '../CartContextProvider';
const CartPageProduct = ({item}) => {
    const [numOfItemHere, setNumOfItemHere] = useState(item.numberOfItem);
    const {cart, setCart, badgeNumber, setBadgeNumber} = useContext(Cart);
    useEffect(()=>{
      setNumOfItemHere(item.numberOfItem)
    }, [cart.length])
 
  
  const addHandler = ()=>{
    setNumOfItemHere(prev=> prev+1); 
    const existingCartItemIndex = cart.findIndex(
      (i) => i.id === item.id
    );
    const existingCartItem = cart[existingCartItemIndex];
    let updatedItems;
    const updatedItem = {
      ...existingCartItem,
      numberOfItem: existingCartItem.numberOfItem + 1,
    };
    updatedItems = [...cart];
    updatedItems[existingCartItemIndex] = updatedItem;
    setBadgeNumber(prev=>prev+1);  
    setCart(updatedItems);
  }

  const removeHandler = ()=>{
    if(numOfItemHere==1){
      const updatedItems = cart.filter(i=> i.id!==item.id);
      setCart(updatedItems);
      setBadgeNumber(prev=>prev-1);
    }
    else{
    setNumOfItemHere(prev=> prev-1);
    const existingCartItemIndex = cart.findIndex(
      (i) => i.id === item.id
    );
    const existingCartItem = cart[existingCartItemIndex];
    let updatedItems;
    const updatedItem = {
      ...existingCartItem,
      numberOfItem: existingCartItem.numberOfItem -1,
    };
    updatedItems = [...cart];
    updatedItems[existingCartItemIndex] = updatedItem;
    setBadgeNumber(prev=>prev-1);
    setCart(updatedItems);
  }
  }

  return (
    <>
            <div className={classes.product}>
            <div className={classes.productDetail}>
              <img
                src={item.img}
                alt=""
              />
              <div className={classes.details}>
                <span className={classes.productName}>
                  <b>Product:  </b>{item.title}
                </span>
                <span className={classes.productId}>
                  <b>ID:  </b>{item.id}
                </span>
                <div
                  style={{ backgroundColor: "black" }}
                  className={classes.productColor}
                ></div>
                <span className={classes.productSize}>
                  <b>Size:</b>37.5
                </span>
              </div>
            </div>
            <div className={classes.priceDetail}>
              <div className={classes.amountContainer}>
              <span style={{cursor:"pointer"}} onClick={removeHandler}> <Remove/></span>
           
            <span className={classes.amount}>{numOfItemHere}</span>
            <span style={{cursor:"pointer"}} onClick={addHandler}><Add/></span>
                
              </div>
              <div className={classes.price}>₹ {item.price}</div>
            </div>
          </div>
         <hr></hr>
         </>
  )
}

export default CartPageProduct