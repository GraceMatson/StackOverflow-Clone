import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';

import LoginPage from './components/LoginPage/login';
import TopNav from './components/TopNav/TopNav';
import UserProfile from './components/UserProfile/Userprofile';

function App(){
  let memberDets = {avatar_src : "https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg", userName : "ABC", userAge : '10 days', lastSeen : '22 Dec', activeDays : 7}; // Need to get this from the DB
  let dp_src = memberDets.avatar_src; 
  return (
    <div className="App">
      <TopNav 
        avatar_src = {dp_src}
      />
      <UserProfile
          memberDets = {memberDets}
        />
      <LoginPage/>
      <nav>
        <Link to="/Questions">Questions</Link>{" "}
        <Link to="/Users">Users</Link>
      </nav>
    </div>
  )
}

export default App;
