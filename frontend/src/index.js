import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import UserProfile from './routes/UserProfile/Userprofile'
import LoginPage from './routes/LoginPage/LoginPage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
    <Routes >
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />      
      <Route path="/UserProfile" element={<UserProfile />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
<BrowserRouter >
    <Routes >
      <Route path="/" element={<App />} />
      <Route path="/user-profile" element={<UserProfile />} />
    </Routes>
    </BrowserRouter>
*/