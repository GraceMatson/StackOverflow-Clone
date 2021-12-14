import React from 'react';
import './login.css';

function LoginPage () {

    return (
        <div className = "Login_page h-screen flex bg-gray-100">
            <form>
                <label>Login Page</label>
                <input label = "email" type = "text" placeholder="email"/>
                <input label = "password" type = "text" placeholder="password" />
                <button >Log in</button>
                <a href = "https://www.google.com/" ><img src = "logo512.png"></img></a>
            </form>
        </div>
    )
}

export default LoginPage;
