import React from 'react';
import LoginPage from './components/LoginPage/login';
import TopNav from './components/TopNav/TopNav';
import UserProfile from './components/UserProfile/Userprofile';

function App(){
  return (
    <div className="App">
      <TopNav 
        avatar_src = "https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"
      />

      <UserProfile/>

      <LoginPage />
      Should there be something here?
    </div>
  )
}

export default App;