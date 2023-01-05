import React from 'react'
import classes from './ProductList.module.css'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
const ProductList = () => {
  return (
    <div className={classes.container}>
        <Announcement/>
        <Navbar/>
        <h1 className={classes.title}>Wireless</h1>
        <div className={classes.filterContent}>
            <div className={classes.filter}>
                <span className={classes.filterText}>Filter Products:</span>
                <select>
                 <option disabled selected>Color</option>
                 <option>Red</option>
                 <option>White</option>
                 <option>Green</option>
                 <option>Black</option>
                 <option>Sky Blue</option>
                 </select>

                 <select>
                 <option disabled selected>Size</option>
                 <option>S</option>
                 <option>M</option>
                 <option>L</option>
                 <option>XL</option>
                 <option>XXL</option>
                 </select>
            </div>
            <div className={classes.filter}>
            <span className={classes.filterText}>Sort Products:</span>
            <select>
                 <option>Newest</option>
                 <option>Price (asc)</option>
                 <option>Price (desc)</option>
                 </select>
            </div>
        </div>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ProductList