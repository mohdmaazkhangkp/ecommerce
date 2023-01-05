import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import classes from './Footer.module.css'
const Footer = () => {
  return (
    <div className={classes.container}>
        <div className={classes.left}>
            <h1>LAMA</h1>
            <p>India's fastest growing audio & wearables brand. The most incredible range of wireless earphones, earbuds, headphones, smart watches, and home audio. From workouts to adventures, boAt will get you sailing!</p>
            <div className={classes.socialContainer}>
                <div style={{backgroundColor:"#3B5999"}} className={classes.socialIcon}>
                    <Facebook/>
                </div>
                <div  style={{backgroundColor:"#E4405F"}}  className={classes.socialIcon}>
                    <Instagram/>
                </div>
                <div  style={{backgroundColor:"#55ACEE"}}  className={classes.socialIcon}>
                    <Twitter/>
                </div>
                <div style={{backgroundColor:"#0A66C2"}}  className={classes.socialIcon}>  
                    <LinkedIn/>
                </div>
            </div>
        </div>
        <div className={classes.center}>
            <h3>Useful Links</h3>
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>Wireless Headphones</li>
                <li>Wireless Speakers</li> 
                <li>Smart Watches</li>
                <li>Gift Card</li>
                <li>Wishlist</li>
                <li>Order Tracking</li>
                <li>My Account</li>
                <li>Terms</li>
                
            </ul>
        </div>
        <div className={classes.right}>
            <h3>Contact</h3>
            <div className={classes.contactItem}>
                <Room style={{marginRight:"10px"}}/> 	
Tap The Scrap 91/147, Rajpur Khurd extension, New Delhi - 110068
            </div>
            <div className={classes.contactItem}>
                <Phone style={{marginRight:"10px"}}/>+91 8800234237
            </div>
            <div className={classes.contactItem}>
                <MailOutline style={{marginRight:"10px"}}/>abcd@lama.com
            </div>
            <img alt='' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Payment_new_91fe0802-f10f-44da-a905-c0d6066f782b_700x.png?v=1666253682'/>
        </div>
    </div>
    // https://i.ibb.co/Qfvn4z6/payment.png
  )
}

export default Footer