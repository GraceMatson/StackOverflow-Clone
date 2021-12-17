import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';


function App(){
  return (
    <div className="App">      
      <LoginPage />
      <nav>
        <Link to="/Questions">Questions</Link>{" "}
        <Link to="/Users">Users</Link>
      </nav>
    </div>
  )
}

export default App;