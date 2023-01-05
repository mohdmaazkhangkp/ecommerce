import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useContext, useState } from 'react'
import classes from './Slider.module.css'
import { sliderItems } from '../data'
import {Link} from 'react-router-dom'
import { Prod } from '../ProductContextProvider'
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const {prod, setProd} = useContext(Prod);
  const handleClick = (direction)=>{
    if(direction==="left"){
      setSlideIndex(slideIndex>0?slideIndex-1:2);
    }
    else setSlideIndex(slideIndex<2 ? slideIndex+1 : 0);
  }
  return (
    <div className={classes.container}>
      <div onClick={()=>handleClick("left")} className={`${classes.arrow} ${classes.leftArrow}`}>
      <ArrowLeftOutlined/>
      </div>
      <div style={{transform:`translateX(${slideIndex*-100}vw)`}} className={classes.wrapper}>

        {sliderItems.map(item=>(
        <div style={{backgroundColor: item.bg}} className={classes.slide}>
          <div className={classes.imgContainer}>
            <img alt='' src={item.img} className={classes.image}/>
          </div>
          <div className={classes.infoContainer}>
            <h1 className={classes.title}>{item.title}</h1>
            <p className={classes.description}>{item.desc}</p>
            <Link to='./product-page'><button onClick={()=>{
              setProd(item);
            }} className={classes.button}>SHOP NOW</button></Link>
          </div>
        </div>
        ))};

        

      </div>
      <div onClick={()=>handleClick("right")}  className={`${classes.arrow} ${classes.rightArrow}`}>
        <ArrowRightOutlined/>
      </div>
    </div>
  )
}

export default Slider