import React from 'react'
import classes from './Register.module.css'
import {Link} from 'react-router-dom'
const Register = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1>Register</h1>
        <p className={classes.desc}>Please fill in the fields below:</p>
        <form>
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input placeholder="Email" />
          <input placeholder="Password" />
          <input placeholder="Confirm Password" />
          <button>CREATE ACCOUNT</button>
          <p>Already have an account? <Link to='/login'>Login</Link></p>
          
        </form>
      </div>
    </div>
  );
}

export default Register