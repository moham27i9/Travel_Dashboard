import React, { useState, useEffect } from 'react';
import '../App.css';
import { Navigate, useNavigate } from 'react-router-dom';
import Trip from './Trip';
import Complaint from './Complaint';




function Complaints() {


  const navigate= useNavigate();



  const [set_travel_data, setTravelData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  // احصل على token من local storage أو من مكان آخر
  const user_id = localStorage.getItem('user_id');
  const token = localStorage.getItem('token');

//   const handleImageError = (e) => {
//     e.target.src = '/user.png'; // مسار الصورة البديلة في مجلد الـ public
//   };
console.log("user_id",user_id);
  useEffect(() => {
    const fetchTravelData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('http://localhost:8000/api/show_complaints', {
          headers: {
            Authorization: `Bearer ${token}`, // أضف رأس التفويض مع token
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch travels data');
        }

        const data = await response.json();
      
        console.log("travel",data.complaints);
      
        setTravelData(data.complaints);

        
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    // تأكد من وجود token قبل إجراء الطلب
    if (token) {
        fetchTravelData();
    }
  }, [token]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!set_travel_data) {
    return <p>No trip data available.</p>;
  }

  // عرض بيانات الملف الشخصي
  return (
    <div className="container1">

        <h2>complaints</h2>
  
    <div className="trip-list">


        {set_travel_data.map((trav)=><Complaint key="index" trav ={trav}/>)}


    </div>
    </div>
  );
}

export default Complaints;