import Contact from '@/Pages/Contact'
import Login from '@/Pages/Login'
import Register from '@/Pages/Register'

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Contact/>} />
            <Route path='/contato' element={<Contact/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />          
        </Routes>
    </BrowserRouter> 
  )
}
