import React, { useState, useEffect } from 'react';
import '../App.css';
import { Navigate,useLocation, useNavigate, useParams } from 'react-router-dom';


const Show_Complaint = () =>{
  const navigate= useNavigate();


      const location =  useLocation();
     
          const {id} = useParams();
    const [set_reservation_data, setreservationData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [trip_id, settripId] = useState(null);
    const [trip_name, settripName] = useState(null);
    const [user_id, setUserId] = useState(null);
    const [theComplaint, setComplaint] = useState(null);
   
  
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
            const response = await fetch(`http://localhost:8000/api/show_complaint/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`, // أضف رأس التفويض مع token
              },
            });
    
            if (!response.ok) {
              throw new Error('Failed to fetch travel data');
            }
    
            const data = await response.json();
          
            console.log("travel",response);
          
            settripId(data.complaint.trip_id);
            setUserId(data.complaint.user_id);
            setComplaint(data.complaint.the_complaint);
           
     
            setreservationData(data.complaint);
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
    
      if (!set_reservation_data) {
        return <p>No data available.</p>;
      }
    

    return(
    
        <div className="container1">
    
    
      <h4>reservation id : {id}</h4>
      <h4>user id : {user_id}</h4>
      <h4>trip id : {trip_id}</h4>
      <h4>complaint : {theComplaint}</h4>
  
     
      {/* <button  className="Delete-button" onClick={()=>handleAddOffer({trip_id})}>add offer</button> */}
            </div>
)

}


export default Show_Complaint