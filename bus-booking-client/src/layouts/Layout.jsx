import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home , Navbar, Booking, Dashboard, Login, SearchBuses, Register } from '../utils/index.js';

export default function Layout() {
  return (
      <Router>
        <Navbar/>
        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/bus-booking/booking" element={<Booking />} />
            <Route path="/bus-booking/login" element={<Login />} />
            <Route path="/bus-booking/register" element={<Register />} />
            <Route path="/bus-booking/dashboard" element={<Dashboard />} />
            <Route path="/bus-booking/search-buses" element={<SearchBuses />} />
        </Routes>
      </Router>
  )
}
