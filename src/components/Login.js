import { Button } from '@mui/material';
import React from 'react';
import './Login.css';
// import {auth , provider} from "../firebase"; 
import { provider } from '../firebase'; 
import { auth } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Login() {
const [state , dispatch]=useStateValue();

const signIn= ()=>{
  //sign in...
   auth.signInWithPopup(provider)
   .then(result=> {
    dispatch({
      type:actionTypes.SET_USER,
      user:result.user,
    });
   })
   .catch((error)=> alert(error.message));
}

  return (
    <div className='login'>
       <div className="login__logo">
        <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />
        <img src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png" alt="" />
       </div>
       <Button type="submit" onClick={signIn}>
        Sign In
       </Button>
    </div>  
  )
}

export default Login
