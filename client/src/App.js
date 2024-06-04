import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/HomePage/Homepage'
import DashboardHome from './Pages/Dashboard_Home/DashboardHome';
import DashboardPayouts from './Pages/Dashboard_Payouts/DashboardPayouts';
import DashboardProduct from './Pages/Dashboard_Product/DashboardProduct';
import CreateNewProduct from './Pages/CreateNewProduct/CreateNewProduct';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/dashboard/home' element={<DashboardHome />} />
          <Route path='/dashboard/create/newProduct' element={<CreateNewProduct />} />
          <Route path='/dashboard/products' element={<DashboardProduct />} />
          <Route path='/dashboard/payouts' element={<DashboardPayouts />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}
