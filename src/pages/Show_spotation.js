import React, { useState, useEffect } from 'react';
import '../App.css';
import { Navigate,useLocation, useNavigate, useParams } from 'react-router-dom';


const Show_spotation = () =>{
  const navigate= useNavigate();


      const location =  useLocation();
     
          const {id} = useParams();
    const [set_Spot_data, setSpotData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user_id, setUserId] = useState(null);
    const [image, setImage] = useState(null);
    const [locationn, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [thespotation, setspotation] = useState(null);
   
  
    const [payment_method, setpayment_method] = useState('');
  
   

    const token = localStorage.getItem('token');

    console.log("Spot_id in show",id);
    useEffect(() => {
        const fetchtouristSpotData = async () => {
          setIsLoading(true);
          setError(null);
         
          console.log("spot_id in showSelected",id);
          localStorage.setItem('spot_id', id);
          try {
            const response = await fetch(`http://localhost:8000/api/show_selected_touristSpot/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`, // أضف رأس التفويض مع token
              },
            });
    
            if (!response.ok) {
              throw new Error('Failed to fetch touristSpot data');
            }
    
            const data = await response.json();
          
            console.log("touristSpot",response);
          
        
            setUserId(data.touristSpot.user_id);
            setspotation(data.touristSpot.name);
            setLocation(data.touristSpot.location);
            setDescription(data.touristSpot.description) 
            setCategory(data.touristSpot.category) 
            setImage(data.image)
     
            setSpotData(data.touristSpot);
          } catch (error) {
            setError(error);
          } finally {
            setIsLoading(false);
          }
        };
    
        // تأكد من وجود token قبل إجراء الطلب
        if (token) {
            fetchtouristSpotData();
        }
      }, [token]);
    
      if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error: {error.message}</p>;
      }
    
      if (!set_Spot_data) {
        return <p>No data available.</p>;
      }
    

    return(
    
        <div className="container1">
    
    <img src={image} alt="Trip" className="spottt-image" />  
      <h3> {thespotation} ({category})</h3>
      <h3> {locationn}</h3>
      <h4> {description}</h4>
  
     
      {/* <button  className="Delete-button" onClick={()=>handleAddOffer({trip_id})}>add offer</button> */}
            </div>
)

}


export default Show_spotation