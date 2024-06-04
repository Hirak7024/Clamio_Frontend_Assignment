import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/HomePage/Homepage'
import DashboardHome from './Pages/Dashboard_Home/DashboardHome';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/dashboard/home' element={<DashboardHome />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
