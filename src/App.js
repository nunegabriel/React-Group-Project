import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Profiles from './components/Profiles';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<Profiles />} /> */}
          <Route path="/my-profile" element={<Profiles />} />
        </Routes>
        {/* <Profiles /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
