import React from 'react'
import { useUserContext } from '../context/userContext';

const Dashboard = () => {
  const { user, logOutUser } = useUserContext();
  console.log(user);
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{user?.displayName}</h2>
      <h2>{user?.email}</h2>
      <button onClick={logOutUser}>Logout User</button>
    </div>
  )
}

export default Dashboard;
