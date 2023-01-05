import React from 'react'
import { categories } from '../data'
import classes from './Categories.module.css'
import CategoryItem from './CategoryItem'
const Categories = () => {
  return (
    <div className={classes.container}>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Categories