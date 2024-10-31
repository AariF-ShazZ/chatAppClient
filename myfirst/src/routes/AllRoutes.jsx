import React from 'react'
import {Routes,Route} from "react-router-dom"
import LoginForm from '../components/Auth/LoginForm'
import RegisterForm from '../components/Auth/RegisterForm'
import NotFound from '../pages/NotFound'
import Chatpage from '../pages/Chatpage.jsx'
import PrivateRoute from './PrivateRoute.jsx'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route  path='/'  element={<LoginForm/>}/>
            <Route  path='/register'  element={<RegisterForm/>}/>
            <Route  path='/chat'  element={<PrivateRoute>
              <Chatpage/>
            </PrivateRoute>}/>
            <Route  path='/*'  element={<NotFound/>}/> 
        </Routes>
    </>
  )
}

export default AllRoutes