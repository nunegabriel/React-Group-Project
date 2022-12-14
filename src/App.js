/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import Missions from './components/Missions';
import Navbar from './components/Navbar';
import Rockets from './components/rockets/Rockets';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
