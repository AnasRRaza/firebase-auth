import React from 'react'
import { Route, Routes } from "react-router-dom"
import Dashboard from '../components/Dashboard';

const Auth = () => {

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default Auth
