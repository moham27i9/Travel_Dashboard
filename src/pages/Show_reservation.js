import React, { useState, useEffect } from 'react';
import '../App.css';
import {  useParams } from 'react-router-dom';


const Show_reservation = () =>{



     
          const {id} = useParams();
    const [set_reservation_data, setreservationData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const [trip_name, settripName] = useState(null);
    const [user_id, setUserId] = useState(null);
    const [RemainingTime, setRemainingTime] = useState(null);
   
  
    const [payment_method, setpayment_method] = useState('');
  
   

    const token = localStorage.getItem('token');

    console.log("reservation_id in show",id);
    useEffect(() => {
        const fetchTravelData = async () => {
          setIsLoading(true);
          setError(null);
         
          console.log("travel_id in showSelected",id);
          localStorage.setItem('trrip_id', id);
          try {
            const response = await fetch(`http://localhost:8000/api/show_reservation/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`, // أضف رأس التفويض مع token
              },
            });
    
            if (!response.ok) {
              throw new Error('Failed to fetch travel data');
            }
    
            const data = await response.json();
            if (data) {
            console.log("travel333333",response);
          
          
            setUserId(data.reservation.user_id);
            setpayment_method(data.reservation.payment_method);
            setRemainingTime(data.RemainingTime);
            settripName(data.tripName);
      
            
     
            setreservationData(data.reservation);
            }
          } catch (error) {
            setError(error);
          } 
          finally {
            setIsLoading(false);
          }
        };
    
        // // تأكد من وجود token قبل إجراء الطلب
        if (token) {
            fetchTravelData();
        }
      }, [token]);
    
      // if (isLoading) {
      //   return <p>Loading...</p>;
      // }
    
      if (error) {
        return <p>Error: {error.message}</p>;
      }
    
      if (!set_reservation_data) {
        return <p>No data available.</p>;
      }
    

    return(
    
        <div className="container1">
    
    

      <h4>trip name : {trip_name}</h4>
      <h4>payment method : {payment_method}</h4>
      <h4>RemainingTime : {RemainingTime}</h4>
     
      {/* <button  className="Delete-button" onClick={()=>handleAddOffer({trip_id})}>add offer</button> */}
            </div>
)

}


export default Show_reservation