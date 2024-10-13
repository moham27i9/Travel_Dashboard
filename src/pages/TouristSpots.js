import React, { useState, useEffect } from 'react';
import '../App.css';
import { Navigate, useNavigate } from 'react-router-dom';
import TouristSpot from '../components/TouristSpot';

function TouristSpots() {
  const navigate= useNavigate();

  const [set_TouristSpots_data, setTouristSpotsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  // احصل على token من local storage أو من مكان آخر
  const user_id = localStorage.getItem('user_id');
  const token = localStorage.getItem('token');


console.log("user_id",user_id);
  useEffect(() => {
    const fetchTouristSpotsData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('http://localhost:8000/api/show_touristSpot', {
          headers: {
            Authorization: `Bearer ${token}`, // أضف رأس التفويض مع token
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch TouristSpots data');
        }

        const data = await response.json();
      
        console.log("TouristSpotsImmmmmage",data.image);
      
        setTouristSpotsData(data.touristSpot);

        if(data.image)
          setImage(data.image)

        
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    // تأكد من وجود token قبل إجراء الطلب
    if (token) {
        fetchTouristSpotsData();
    }
  }, [token]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!set_TouristSpots_data) {
    return <p>No TouristSpots data available.</p>;
  }

  // عرض بيانات الملف الشخصي
  return (
    <div className="container1">

        <h2> TouristSpot Suggestions</h2>
  
    <div className="trip-list">
        {set_TouristSpots_data.map((spot)=><TouristSpot key="index" spot ={spot} image={image}/>)}



    </div>
    </div>
  );
}

export default TouristSpots;