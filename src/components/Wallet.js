import React, { useState, useEffect } from 'react';
import '../styles.css';
import { useParams } from 'react-router-dom';


function Wallet() {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [balance, setBalance] = useState('');


  // احصل على token من local storage أو من مكان آخر
  const token = localStorage.getItem('token');

  const handleImageError = (e) => {
    e.target.src = '/user.png'; // مسار الصورة البديلة في مجلد الـ public
  };
 
  useEffect(() => {
    const fetchProfileData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:8000/api/show_total_balance`, {
          headers: {
            Authorization: `Bearer ${token}`, // أضف رأس التفويض مع token
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch wallet data');
        }

        const data = await response.json();
       
        setBalance(data.total_balance)
     
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    // تأكد من وجود token قبل إجراء الطلب
    if (token) {
      fetchProfileData();
    }
  }, [token]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

 

  // عرض بيانات الملف الشخصي
  return (
 

  <div class="profile-container">
  <div class="profile-header">
  <img src="cooo.png" alt="Trip" className="trip-image" /> 
    <div class="profile-info">
    <h2>Wallet</h2>
    </div>
  </div>
  <div class="profile-details">

    <div class="detail-item">
      <h3>Balance:</h3>
      <p>{balance} $</p>
    </div>
 
  </div>
</div>

  );
}

export default Wallet