import React from 'react'
import {Routes,Route} from "react-router-dom"
import LoginForm from '../components/Auth/LoginForm'
import RegisterForm from '../components/Auth/RegisterForm'
import NotFound from '../pages/NotFound'
import Chatpage from '../pages/Chatpage'
const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route  path='/'  element={<Chatpage/>}/>
            <Route  path='/login'  element={<LoginForm/>}/>
            <Route  path='/register'  element={<RegisterForm/>}/>
            <Route  path='/*'  element={<NotFound/>}/> 
        </Routes>
    </>
  )
}

export default AllRoutes