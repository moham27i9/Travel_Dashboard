import React from 'react';
import { useHistory, useNavigate } from 'react-router-dom'; // أو import { useNavigate } from 'react-router-dom' إذا كنت تستخدم React Router v6
import '../App.css';
function Logout() {
 
    const navigate = useNavigate();
  const handleLogout = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      // إزالة token من localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user_id');

      // إعادة توجيه المستخدم إلى صفحة تسجيل الدخول
    navigate('/login')
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="container">
        <h2>Logout</h2>
     <p>Are you sure you want to log out </p>
    <button className="Delete-button" onClick={handleLogout}>
      Logout
    </button>
    </div>
  );
}

export default Logout;
