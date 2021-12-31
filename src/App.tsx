import React from 'react';
import Nav from './components/Nav';
import Home from './components/Landing/Home';
import Information from './components/Landing/Information';
import { Footerindex } from './components/Footer';
import {LandingIndex} from './components/Landing'
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile/profile';
import ProtectedRoute from './auth/protect-route';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/loading';



function App() {

  const { isLoading, error } = useAuth0();

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<LandingIndex />}/>

        {/*Protected routes*/}
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footerindex></Footerindex>
    </div>
  );
}

export default App;
  