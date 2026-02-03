import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import WhatITreat from './pages/WhatITreat';
import Insurance from './pages/Insurance';
import Approach from './pages/Approach';
import Appointments from './pages/Appointments';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/approach'
          element={<Approach />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/what-i-treat'
          element={<WhatITreat />}
        />
        <Route
          path='/insurance'
          element={<Insurance />}
        />
        <Route
          path='/appointments'
          element={<Appointments />}
        />
      </Routes>
    </Router>
  );
}
