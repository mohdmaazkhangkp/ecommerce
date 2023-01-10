import React from 'react'
import classes from './CategoryItem.module.css'
import { Link } from 'react-router-dom'
const CategoryItem = ({item}) => {
  return (
    <div className={classes.container}>
        <img alt='' src={item.img}/>
        <div className={classes.info}>
            <h1>{item.title}</h1>
            <Link to='/category-product'><button>SHOP NOW</button></Link>
        </div>
    </div>
  )
}
export default CategoryItem;