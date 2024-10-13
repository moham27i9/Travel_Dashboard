import React, { useState } from 'react';
import '../styles.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');
    const navigate= useNavigate();
 
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }) 
     ;
      
  
  
      const data = await response.json();
     
      if (data) {
       
        localStorage.setItem('token', data.token);
        localStorage.setItem('message', data.message);
        localStorage.setItem('name', data.name);
        localStorage.setItem('user_id', data.user_id);
        setMessage(data.message);
        console.log('تم تسجيل الدخول بنجاح', data);
        navigate('/Main')
    }  
    };

  
    return (
      <form className="container" onSubmit={handleSubmit}>
        <div>
            <h2> Login</h2>
            <p>you must log in to get started</p>
        {message && <div style={{ marginBottom: 10, color: '#219900e7' }}>{message}</div>}
          <input
            type="email"
            id="email"
            placeholder="Enter email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Enter password "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button  className="Register-button" type="submit"> login</button>
   
       
      </form>
    );
}

export default Login;
