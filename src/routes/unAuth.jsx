import React from 'react'
import { Route, Routes } from "react-router-dom"
import Signin from '../components/Signin';
import Signup from '../components/Signup';

const UnAuth = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default UnAuth;
