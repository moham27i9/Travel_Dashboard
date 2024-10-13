import React, { useState, useEffect } from 'react';
import '../App.css';
import { Navigate,useNavigate } from 'react-router-dom';
function Complaint({trav}){

  const navigate= useNavigate();

  const handledit = (travId)=>{
    navigate(`/EditTrip/${travId}`)
  }
  const handleDelete=(travId)=>{
 
    navigate(`/DeleteTrip/${travId}`)
  
   }
    const handleshow=(travId)=>{
    
       navigate(`/Show_Complaint/${travId}`)
     
      }

      return(
    
        <div className="container2" >


           <h3>{trav.id}</h3>
           <h3>{trav.the_complaint}</h3> 
           <div className="buttons">
           <button className="Travel-button" onClick={()=>handleshow(trav.id)}>عرض</button>
           <button  className="Delete-button" onClick={()=>handleDelete(trav.id)}>حذف</button>
            </div>
            </div>
)
    }
      export default  Complaint
;