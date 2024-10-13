import React, { useState, useEffect } from 'react';
import '../App.css';
import { Navigate,useLocation, useNavigate, useParams } from 'react-router-dom';


const Show_selected = ({trav}) =>{
  const navigate= useNavigate();




      const location =  useLocation();
      const trav_id = location.state;
          const {id} = useParams();
    const [set_travel_data, setTravelData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [trip_id, setId] = useState(null);
    const [site_name, setTourismNameSite] = useState('');
    const [period, setPeriod] = useState('');
    const [country_name, setCountryName] = useState('');
    const [hotels_name, setHotelsName] = useState('');
    // const [seating_stoppages, setSeatingStoppages] = useState('');
    const [departure_date, setDeparDate] = useState('');
    const [departure_location, setDepartLocation] = useState('');
    const [service_degree, setServDegree] = useState('');
    const [price, setPrice] = useState('');
   

    const token = localStorage.getItem('token');

    localStorage.setItem('trrrrrrip_id', trip_id);

    const handleAddOffer=(trip_id)=>{
      console.log("trippppID",trip_id);
      navigate(`/AddOffer/${trip_id}`)
    
     }

     const handleAddActivity=(trip_id)=>{

      navigate(`/AddActivity/${trip_id}`)
    
     }

     const handleAddFood=(trip_id)=>{

      navigate(`/AddFood/${trip_id}`)
    
     }

     const handleAddStopStation=(trip_id)=>{

      navigate(`/AddStopStation/${trip_id}`)
    
     }


    useEffect(() => {
        const fetchTravelData = async () => {
          setIsLoading(true);
          setError(null);
         
          console.log("travel_id in showSelected",id);
          localStorage.setItem('trrip_id', id);
          try {
            const response = await fetch(`http://localhost:8000/api/show_selected_trip/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`, // أضف رأس التفويض مع token
              },
            });
    
            if (!response.ok) {
              throw new Error('Failed to fetch travel data');
            }
    
            const data = await response.json();
          
            console.log("travel",response);
          
            setId(data.trip.id);
            setTourismNameSite(data.trip.site_name)
            setPeriod(data.trip.period)
            setCountryName(data.trip.country_name)
            setHotelsName(data.trip.hotels_name)
            // setSeatingStoppages(data.travel.seating_stoppages)
            setDeparDate(data.trip.departure_date)
            setDepartLocation(data.trip.departure_location)
            setServDegree(data.trip.service_degree)
            // setActivities(data.travel.activities)
            // setFoodServiceSchedule(data.travel.food_service_schedule)
            setPrice(data.trip.price)
            // setStatus(data.travel.status)
            setTravelData(data.trip);
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
        return <p>No data available.</p>;
      }
    

    return(
    
        <div className="container1">
    
            <h3>trip details</h3>
      <h4><img src="../badge-check.png" alt="*" className="icon-trip-image" /> TourismNameSite : {site_name}</h4>
      <h4> <img src="../dollar.png" alt="*" className="icon-trip-image" /> Price of trip : {price}</h4>
      <h4><img src="../clock.png" alt="*" className="icon-trip-image" />  Period of trip : {period} days</h4>
      <h4><img src="../chart-histogram.png" alt="*" className="icon-trip-image" />  service Degree: {service_degree}</h4> 
      <h4><img src="../marker.png" alt="*" className="icon-trip-image" />  departure location  : {departure_location}</h4>
      <h4><img src="../world1.png" alt="*" className="icon-trip-image" />  country name  : {country_name}</h4>
      <h4><img src="../home2.png" alt="*" className="icon-trip-image" />  hotel name : {hotels_name}</h4>
      <h4><img src="../calendar-clock.png" alt="*" className="icon-trip-image" />  departure date : {departure_date}</h4>
     
      <button  className="Travel-button" onClick={()=>handleAddOffer({trip_id})}>add offer</button>
      <button  className="Travel-button" onClick={()=>handleAddActivity({trip_id})}>add activity</button>
      <button  className="Travel-button" onClick={()=>handleAddFood({trip_id})}>add food</button>
      <button  className="Travel-button" onClick={()=>handleAddStopStation({trip_id})}>add stop Station</button>
            </div>
)

}


export default Show_selected