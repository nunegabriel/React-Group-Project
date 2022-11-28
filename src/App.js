import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
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
          <Route path="/my-profile" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
