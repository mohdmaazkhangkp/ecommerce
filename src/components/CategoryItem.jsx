import React from 'react'
import classes from './CategoryItem.module.css'
const CategoryItem = ({item}) => {
  return (
    <div className={classes.container}>
        <img alt='' src={item.img}/>
        <div className={classes.info}>
            <h1>{item.title}</h1>
            <button>SHOP NOW</button>
        </div>
    </div>
  )
}

export default CategoryItem