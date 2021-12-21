import React, { useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase-config';

const EmailPassword = () => {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }
  const logout = async () => {
    signOut(auth);
  }

  return (
    <div className='center'>
      <h1>Firebase Authentication</h1>
      <div>
        <h3>Register User</h3>
        <input
          type="text"
          placeholder="Enter Email..."
          onChange={(e) => { setRegisterEmail(e.target.value) }}
        />
        <input
          type="text"
          placeholder="Enter Password..."
          onChange={(e) => { setRegisterPassword(e.target.value) }}
        />
        <button onClick={register}>Create User</button>
      </div>
      <div>
        <h3>Login User</h3>
        <input
          type="text"
          placeholder="Enter Email..."
          onChange={(e) => { setLoginEmail(e.target.value) }}
        />
        <input
          type="text"
          placeholder="Enter Password..."
          onChange={(e) => { setLoginPassword(e.target.value) }}
        />
        <button onClick={login}>Login User</button>
      </div>
      <div>
        <h2>User Logged In</h2>
        {user?.email}
        <button onClick={logout}>Logout User</button>
      </div>
    </div>
  );

}

export default EmailPassword
