import { Send } from '@mui/icons-material';
import React from 'react'
import classes from './Newsletter.module.css';

const Newsletter = () => {
  return (
    <div className={classes.container}>
        <h1>Newsletter</h1>
        <div className={classes.desc}>Get timely update from your favorite products.</div>
        <div className={classes.inputContainer}>
            <input placeholder='Your Email'/>
            <button>
                <Send/>
            </button>
        </div>
    </div>
  )
}

export default Newsletter