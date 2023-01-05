import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React, { useContext } from 'react'
import { Prod } from '../ProductContextProvider';
import classes from './Product.module.css'
import {Link} from 'react-router-dom'
const Product = ({item}) => {
    const {prod, setProd} = useContext(Prod);
  return (
    <div className={classes.container}>
        <div className={classes.circle}></div>
        <img alt='' src={item.img}/>
        <div className={classes.info}>
            <div className={classes.icon}>
                <ShoppingCartOutlined/>
            </div>
            <Link to='/product-page' ><div onClick={()=>{
                setProd(item)
            }}  className={classes.icon}>
                <SearchOutlined/>
            </div></Link>
            
            <div className={classes.icon}>
                <FavoriteBorderOutlined/>
            </div>
        </div>
    </div>
  )
}

export default Product