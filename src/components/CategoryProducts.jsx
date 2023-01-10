import React from 'react'
import Announcement from './Announcement'
import Footer from './Footer'
import GoToTop from './GoToTop'
import Navbar from './Navbar'
import Newsletter from './Newsletter'
import Products from './Products'

const CategoryProducts = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Products/>
        <Newsletter/>
        <Footer/>
        <GoToTop/>
    </div>
  )
}

export default CategoryProducts