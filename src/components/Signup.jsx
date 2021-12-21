import React, { useRef } from 'react';
import { useUserContext } from '../context/userContext';
import { useNavigate } from 'react-router';

const Signup = () => {

  const { registerUser } = useUserContext();
  const navigate = useNavigate()

  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const onSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value
    if (name && email && password) {
      registerUser({ name, password, email })
    }
  }

  const sendToSignin = () => {
    navigate("/")
  }

  return (
    <div className='form'>
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='Name' ref={nameRef} />
        <input type="email" placeholder='Email' ref={emailRef} />
        <input type="password" placeholder='Password' ref={passwordRef} />
        <button type="submit" >Sign In</button>
        <p onClick={sendToSignin}>Already have an account?</p>
      </form>
    </div>
  )
}

export default Signup
