import React, { useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import User from './User';

function UserForm() {
  const navigate = useNavigate();
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); 

  const user_id = localStorage.getItem('user_id');
  const token = localStorage.getItem('token');

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);

    try {
      let apiUrl = 'http://localhost:8000/api/show_all_users';
      if (searchTerm) { 
        apiUrl = `http://localhost:8000/api/search_OnUsers?search=${searchTerm}`; 
      }

      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch users data');
      }

      const data = await response.json();
      setUsers(data.users); // تأكد من أن الاستجابة تحتوي على users
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // جلب جميع المستخدمين عند تحميل الصفحة لأول مرة
    handleSearch(); 
  }, [token]); 

  return (
    <div className="container1">
      <h2>Users</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="بحث عن مُستخدم..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button className="Delete-button" onClick={handleSearch}>
          search
        </button>
      </div>
      <div className="trip-list">
        {isLoading && <p>Loading...</p>}
    
        {!isLoading && !error && users && users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserForm;

