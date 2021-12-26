import React from 'react';
import LoginPage from './components/LoginPage/login';
import TopNav from './components/TopNav/TopNav';
import UserProfile from './components/UserProfile/Userprofile';

function App(){
  let dp_scr = "https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"; // Need to get this from the DB
  let user_name = "ABC"; // Need to get this from the DB
  let dp_scr = "https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"; // Need to get this from the DB
  return (
    <div className="App">
      <TopNav 
        avatar_src = {dp_src}
      />

      <LoginPage
        avatar_src = {dp_scr}
      />
      Should there be something here?
    </div>
  )
}

export default App;
