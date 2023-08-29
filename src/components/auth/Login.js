import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

function Login() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = () => {
    
    // const storedUsername = localStorage.getItem('username');
    // const storedPassword = localStorage.getItem('password');

    if (username === 'akhil@gmail.com' && password === 'akhil123') {
      // console.log('Logged in:', username);
      navigate('/Home')
  }
     else {
      navigate('/');
    }
};

  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-8 offset-2'>
            <h2>Login</h2>
            <label>Email:</label>
            <input
                className='form-control'
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label>Password:</label>
            <input
                className='form-control'
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br/>
            <button className='btn bg-info' onClick={handleLogin}>Submit</button><br/>
            
            </div>
        </div>
    </div>
  );
}

export default Login;