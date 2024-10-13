import React, { useState, useEffect } from 'react';
import '../App.css';
import { Navigate,useNavigate } from 'react-router-dom';
function TouristSpot({ spot,image }){

  const navigate= useNavigate();

  // const handledit = (spotId)=>{
  //   navigate(`/Update_TouristSpot/${spotId}`)
  // }
  const handleDelete=(spotId)=>{
 
    navigate(`/Deletespotation/${spotId}`)
  
   }
    const handleshow=(spotId)=>{
    
       navigate(`/Show_spotation/${spotId}`)
     
      }

      return(
    
        <div className="container2" >
          <img src="trip.jpg" alt="Trip" className="trip-image" />   
           <h3> Name:{spot.name}</h3>
           <h3>Location :{spot.location}</h3> 
    
           <div className="buttons">
           <button className="Travel-button" onClick={()=>handleshow(spot.id)}>show</button>
           {/* <button className="Travel-button" onClick={()=>handledit(spot.id)}>update</button> */}
           <button  className="Delete-button" onClick={()=>handleDelete(spot.id)}>delete</button>
            </div>
            </div>
)
    }
      export default TouristSpot;