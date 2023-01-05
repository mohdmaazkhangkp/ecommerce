import { Add, Remove } from '@mui/icons-material'
import React, { useContext, useEffect, useState } from 'react'
import  { Cart } from '../CartContextProvider'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import {  Prod } from '../ProductContextProvider'
import classes from './ProductPage.module.css'
const Product = () => {
  const {prod} = useContext(Prod);
  
  const {cart, setCart, badgeNumber, setBadgeNumber} = useContext(Cart);
  const[numOfItemHere, setNumOfItemHere] = useState(1);
  
  const addToCartHandler =()=>{
    const existingCartItemIndex = cart.findIndex(
      (item) => item.id === prod.id
    );
    const existingCartItem = cart[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        numberOfItem: existingCartItem.numberOfItem + numOfItemHere,
      };
      updatedItems = [...cart];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const prodTemp = prod;
      prodTemp.numberOfItem=numOfItemHere
      updatedItems = cart.concat(prodTemp);
    }
    setBadgeNumber(numOfItemHere + cart.reduce((total, curr)=> total+Number(curr.numberOfItem) , 0));
    setCart(updatedItems);
    
  }

  return (
    
    <div className={classes.container}>
      <Announcement />
      <Navbar />
      <div className={classes.wrapper}>
        <div className={classes.imgContainer}>
          <img
            src={prod.img}
            alt=""
          />
        </div>
        <div className={classes.infoContainer}>
          <h1>{prod.name}</h1>
          <p>
           {prod.desc}
          </p>
          <span className={classes.price}>₹ {prod.price}</span>
          <div className={classes.filterContainer}>
            <div className={classes.filter}>
              <span className={classes.filterTitle}>Color</span>
              <div style={{backgroundColor:"green"}} className={classes.filterColor}></div>
              <div style={{backgroundColor:"black"}}  className={classes.filterColor}></div>
              <div style={{backgroundColor:"blue"}}  className={classes.filterColor}></div>
            </div>
            <div className={classes.filter}>
              <span className={classes.filterTitle}>Size</span>
              <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>
          </div>
          <div className={classes.addContainer}>
          <div className={classes.amountContainer}>
          <span style={{cursor:"pointer"}} onClick={()=>{
              if(numOfItemHere!==1) setNumOfItemHere(numOfItemHere-1)
            }}> <Remove/></span>
           
            <span  className={classes.amount}>{numOfItemHere}</span>
            <span style={{cursor:"pointer"}} onClick={()=>{
              setNumOfItemHere(numOfItemHere+1)
            }}><Add/></span>
          </div>
          <button onClick={addToCartHandler}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
      <GoToTop/>
    </div>
  );
}

export default Product