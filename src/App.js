import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Profiles from './components/Profiles';

function App() {
  return (
    <div className="App">
      <BrowserRouter />
      <Profiles />
    </div>
  );
}

export default App;
