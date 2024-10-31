import React from 'react'
import { useSelector } from 'react-redux'
import { Navigator, useNavigate } from 'react-router-dom';
const PrivateRoute = ({children}) => {
  
  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user);
  console.log('protectedRoute token =>', token);
  console.log('protectedRoute user =>', user);
  const navigate = useNavigate()
  // Assuming token presence signifies authentication
  if (!token) {
    // Redirect to login page or any other route if token is not available
    return navigate("/login");
  }

  // Render children if token is available
  return <>{children}</>;
}

export default PrivateRoute