import Nav from './components/Nav';
import { Footerindex } from './components/Footer';
import {LandingIndex} from './components/Landing'
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile/profile';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<LandingIndex />}/>

          {/*Protected routes*/}
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <Footerindex></Footerindex>
      </Provider>
      
    </div>
  );
}

export default App;
  