import React from 'react';
import Nav from './components/Nav';
import Home from './components/Landing/Home';
import Information from './components/Landing/Information';
import { Footerindex } from './components/Footer';
import {LandingIndex} from './components/Landing'
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile/profile';
function App() {
  return (
    
    <div className="App">
      <Nav></Nav>
      
      <Routes>
        <Route path="/" element={<LandingIndex></LandingIndex>}/>
        <Route path="/profile" element={<Profile></Profile>}/>
      </Routes>

      <Footerindex></Footerindex>
    </div>
  );
}

export default App;
