import React, { useRef } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"
import { useUserContext } from '../context/userContext';
import { useNavigate } from 'react-router';

const Signin = () => {

  const { logInUser, forgotPassword, signInWithFacebook, signInWithGoogle } = useUserContext();
  const navigate = useNavigate()

  const emailRef = useRef()
  const passwordRef = useRef()

  const onSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email && password) {
      logInUser({ email, password });
    }
  }

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    if (email) {
      forgotPassword(email);
      emailRef.current.value = "";
    }
  }

  const sendToSignup = () => {
    navigate("/signup")
  }

  return (
    <div className='form'>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input type="email" placeholder='Email' ref={emailRef} />
        <input type="password" placeholder='Password' ref={passwordRef} />
        <button type="submit" >Sign In</button>
        <p onClick={handleForgotPassword}>Forgot Password?</p>
        <p>Or Sign Up using</p>
        <div className="social">
          <FaFacebook className='social-icon facebook' onClick={signInWithFacebook} />
          <FcGoogle className='social-icon google' onClick={signInWithGoogle} />
        </div>
        <p onClick={sendToSignup}>New user? Click here</p>
      </form>
    </div>
  )
}

export default Signin
