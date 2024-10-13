import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
function Trip({trip}){

  const navigate= useNavigate();

  const handledit = (tripId)=>{
    navigate(`/EditTrip/${tripId}`)
  }
  const handleDelete=(tripId)=>{
 
    navigate(`/DeleteTrip/${tripId}`)
  
   }
    const handleshow=(tripId)=>{
    
       navigate(`/Show_selected/${tripId}`)
     
      }

      return(
    
        <div className="container2" >
         <img src="bb.png" alt="Trip" className="trip-image" /> 

           <h3>{trip.site_name}</h3>
           <h3>{trip.price} $</h3> 
           <div className="buttons">
           <button className="Travel-button" onClick={()=>handleshow(trip.id)}>show</button>
           <button className="Travel-button" onClick={()=>handledit(trip.id)}>edit</button>
           <button  className="Delete-button" onClick={()=>handleDelete(trip.id)}>delete</button>
            </div>
            </div>
)
    }
      export default Trip;