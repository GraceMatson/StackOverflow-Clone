import React from 'react';
import LoginPage from './components/LoginPage/login';
import TopNav from './components/TopNav/TopNav';
import UserProfile from './components/UserProfile/Userprofile';

function App(){
  let memberDets = {avatar_src : "https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg", userName : "ABC", userAge : 10, lastSeen : 10, streak : 0}; // Need to get this from the DB
  let dp_src = memberDets.avatar_src; 
  let user_name = memberDets.userName; 
  return (
    <div className="App">
      <TopNav 
        avatar_src = {dp_src}
      />

      <LoginPage
        memberDets = {memberDets}
      />
      Should there be something here?
    </div>
  )
}

export default App;
