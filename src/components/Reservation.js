import React, { useState, useEffect } from 'react';
import '../App.css';
import { Navigate,useNavigate } from 'react-router-dom';
function Reservation({reserv}){

  const navigate= useNavigate();

  const handledit = (reservId)=>{
    navigate(`/EditReservation/${reservId}`)
  }
  // const handleDelete=(reservId)=>{
 
  //   navigate(`/DeleteReservation/${reservId}`)
  
  //  }
    const handleshow=(reservId)=>{
    
       navigate(`/Show_reservation/${reservId}`)
     
      }

      return(
    
        <div className="container2" >

           <h3>trip name:{reserv.trip_name}</h3>
           <h3>user :{reserv.user_name}</h3> 
    
           <div className="buttons">
           <button className="Travel-button" onClick={()=>handleshow(reserv.id)}>show</button>
           {/* <button className="Travel-button" onClick={()=>handledit(reserv.id)}>update</button> */}
           {/* <button  className="Delete-button" onClick={()=>handleDelete(reserv.id)}>حذف</button> */}
            </div>
            </div>
)
    }
      export default Reservation;