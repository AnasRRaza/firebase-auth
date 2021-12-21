import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase-config"

const Google = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const user = await signInWithPopup(auth, provider);
      console.log(user);
      return user;
    } catch (error) {
      console.log(error.message);
    }
  }

  const logOut = async () => {
    await signOut(auth);
  }

  return (
    <div className="center">
      <button onClick={signInWithGoogle}>Sign In With Google</button>
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

export default Google;