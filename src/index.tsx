import React from 'react';
import ReactDOM from 'react-dom';
import './css/aos.min.css';
import './css/bootstrap.min.css';
import './css/style.css';
import './css/swiper.css';
import './css/fontawesome-all.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProviderWithHistory from './auth/authProvider';
import { BrowserRouter as BRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BRouter>
      <AuthProviderWithHistory>
        <App />
      </AuthProviderWithHistory>
    </BRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
