import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from '../utils/index.js';

export default function Layout() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  )
}
