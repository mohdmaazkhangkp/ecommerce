import React, { useContext, useEffect, useState } from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import classes from './CartPage.module.css'
import { Cart } from '../CartContextProvider'
import { Link } from 'react-router-dom'
import CartPageProduct from './CartPageProduct'

const CartPage = () => {
  const {cart, setCart} = useContext(Cart);
    const [subtotal, setSubtotal] = useState(0);
   useEffect(()=>{
  
    setSubtotal(cart.reduce((total, curr)=> total+Number(curr.price*curr.numberOfItem) , 0));
   }, [cart]);
  return (
   
    <div className={classes.container}>
        
      <Announcement />
      <Navbar />
      {cart.length===0?
      <div className={classes.emptyCart}>
        <div >Your cart is empty</div>
        <Link to='/'> <button>START SHOPPING</button></Link>
       
      </div>
      :
      <div className={classes.wrapper}>
      <h1>Your Bag</h1>
      <div className={classes.top}>
        <Link to='/'><button className={classes.unfilledButton}>Continue Shopping</button></Link>
        <div className={classes.topTexts}>
          <span>Shopping Bag (2)</span>
          <span>Your Wishlist (0)</span>
        </div>
        <button className={classes.filledButton}>CheckOut Now</button>
      </div>

      <div className={classes.bottom}>
        <div className={classes.info}>
        {cart.map((item) => (
          <CartPageProduct item={item}/>
      ))}
          
          
        </div>
        <div className={classes.summary}>
          <h1>Order Summary</h1>
          <div className={classes.summaryItem}>
            <span className={classes.summaryItemText}>Subtotal</span>
            <span className={classes.summaryItemPrice}>₹ {subtotal}</span>
          </div>
          <div className={classes.summaryItem}>
            <span className={classes.summaryItemText}>
              Estimated Shipping
            </span>
            <span className={classes.summaryItemPrice}>3-4 Days</span>
          </div>
          <div className={classes.summaryItem}>
            <span className={classes.summaryItemText}>Festive Discount</span>
            <span className={classes.summaryItemPrice}>10%</span>
          </div>
          <div
            className={`${classes.summaryItem} ${classes.summaryItemTotal}`}
          >
            <span className={classes.summaryItemText}>Total</span>
            <span className={classes.summaryItemPrice}>₹ {Math.round(subtotal- (subtotal*0.1))}</span>
          </div>
          <button>CheckOut Now</button>
        </div>
      </div>
    </div>
      }
      
      <Footer />
    </div>
  );
}

export default CartPage