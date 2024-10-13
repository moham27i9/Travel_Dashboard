import React, { useState, useEffect } from 'react';
import '../App.css';
import {  useParams } from 'react-router-dom';


const Show_touristSpot = () =>{



     
          const {id} = useParams();
    const [set_touristSpot_data, settouristSpotData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const [spot_name, setTouristName] = useState(null);
    const [user_id, setUserId] = useState(null);
    const [location, setlocation] = useState(null);
   
  
    const [payment_method, setpayment_method] = useState('');
  
   

    const token = localStorage.getItem('token');

    console.log("touristSpot_id in show",id);
    useEffect(() => {
        const fetchTouristSpot = async () => {
          setIsLoading(true);
          setError(null);
         
          console.log("travel_id in showSelected",id);
          localStorage.setItem('trrip_id', id);
          try {
            const response = await fetch(`http://localhost:8000/api/show_selected_touristSpot/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`, // أضف رأس التفويض مع token
              },
            });
    
            if (!response.ok) {
              throw new Error('Failed to fetch spot data');
            }
    
            const data = await response.json();
          
            console.log("spot",response);
          
          
            setUserId(data.touristSpot.user_id);
           
            setlocation(data.touristSpot.location);
            setTouristName(data.touristSpot.name);
      
            
     
            settouristSpotData(data.touristSpot);
          } catch (error) {
            setError(error);
          } finally {
            setIsLoading(false);
          }
        };
    
        // تأكد من وجود token قبل إجراء الطلب
        if (token) {
            fetchTouristSpot();
        }
      });
    
      if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error: {error.message}</p>;
      }
    
      if (!set_touristSpot_data) {
        return <p>No data available.</p>;
      }
    

    return(
    
        <div className="container1">
    
    
      <h4>touristSpot id : {id}</h4>
      <h4>user id : {user_id}</h4>
      <h4>spot name : {spot_name}</h4>
      <h4>location : {location}</h4>
     
      {/* <button  className="Delete-button" onClick={()=>handleAddOffer({trip_id})}>add offer</button> */}
            </div>
)

}


export default Show_touristSpot