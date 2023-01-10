import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import classes from './Navbar.module.css';
import {Link} from 'react-router-dom'
import { Cart } from '../CartContextProvider';

const Navbar = () => {
  const {cart, setCart, badgeNumber, setBadgeNumber} = useContext(Cart);
  
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <span  className={classes.lang}>EN</span>
          <div className={classes.searchContainer}>
            
            <input placeholder='Search' className={classes.input} />
            <Search style={{color:"gray", fontSize:16}}/>
          </div>
        </div>
        <div className={classes.center}>
          <Link className={classes.logo} to="/"><h1 >MAAZ</h1></Link>
        </div>
        <div className={classes.right}>
        <Link to='/register' className={classes.menuItem}>REGISTER</Link>
        <Link to='/login' className={classes.menuItem}>LOGIN</Link>
        <Link to='/cart' className={classes.menuItem}><Badge badgeContent={badgeNumber} color="primary">
             <ShoppingCartOutlined/>
            </Badge></Link>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar