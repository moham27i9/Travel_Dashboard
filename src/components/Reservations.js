import React, { useState, useEffect } from 'react';
import '../App.css';
import { Navigate, useNavigate } from 'react-router-dom';
import Trip from '../pages/Trip';
import Reservation from './Reservation';




function Reservations() {


  const navigate= useNavigate();

  const [set_Reservations_data, setReservationsData] = useState(null);
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
    const fetchReservationsData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('http://localhost:8000/api/show_all_reservations', {
          headers: {
            Authorization: `Bearer ${token}`, // أضف رأس التفويض مع token
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch reservations data');
        }

        const data = await response.json();
      
        console.log("reservations",data.reservations);
      
        setReservationsData(data.reservations);

        
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    // تأكد من وجود token قبل إجراء الطلب
    if (token) {
        fetchReservationsData();
    }
  }, [token]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!set_Reservations_data) {
    return <p>No Reservations data available.</p>;
  }

  // عرض بيانات الملف الشخصي
  return (
    <div className="container1">

        <h2> Reservations  </h2>
  
    <div className="trip-list">


        {set_Reservations_data.map((reserv)=><Reservation key="index" reserv ={reserv}/>)}


    </div>
    </div>
  );
}

export default Reservations;