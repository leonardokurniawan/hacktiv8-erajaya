import { Home, Login } from '../pages'
import React from 'react'
import {Routes,Route} from 'react-router-dom'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default MainRoutes