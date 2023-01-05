import React from 'react'
import classes from './Register.module.css'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'

const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1>Login</h1>
        <p className={classes.desc}>Please enter your e-mail and password:</p>
        <form>
          <input placeholder="Email" />
          <input placeholder="Password" >
          </input>
          <button>LOGIN</button>
          <p>New customer? <Link to='/register'>Create an account</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login