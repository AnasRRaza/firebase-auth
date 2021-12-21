import React, { useState } from 'react';
import { FacebookAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase-config';

const Facebook = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const user = await signInWithPopup(auth, provider);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  const logOut = async () => {
    await signOut(auth);
  }

  return (
    <div className='center'>
      <button onClick={signInWithFacebook}>Sign In with Facebook</button>
      {user &&
        <div>
          <h1>{user?.displayName}</h1>
          <h1>{user?.email}</h1>
          <img src={user?.photoURL} alt="" width={200} height={200} />
          <br />
          <button onClick={logOut}>Logout</button>
        </div>
      }
    </div>
  )
}

export default Facebook;
