import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';

function AddFood() {
  const [food_name, setfood_name] = useState('');
  const [food_name_error, setfood_nameError] = useState('');
 
  const [description, setDescription] = useState('');
  const [period, setperiod] = useState('');
  const [type, setType] = useState('');
  const [description_error, setDescriptionErr] = useState('');
  const [period_error, setperiodErr] = useState('');
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('token');
  const {trip_id} = useParams();

  const tr_id = localStorage.getItem('trrip_id');
  const handleSubmit = async (e) => {
    let isValid = true;

    if (!food_name) {
      setfood_nameError(' يجب إدخال أسم الطعام' );
      isValid = false;
    } else {
      setfood_nameError('');
    }
    if (!description) {
      setDescriptionErr(' يجب إدخال  الوصف' );
      isValid = false;
    } else {
      setDescriptionErr('');
    }

    if (!period) {
      setperiodErr('  يجب إدخال الفترة الزمنية' );
      isValid = false;
    } else {
      setperiodErr('');
    }

  

   
console.log("iddddddd",tr_id)
    e.preventDefault();
    if(isValid){

      try {
        const response = await axios.post( `http://localhost:8000/api/add_food/${tr_id}`, 
        {
      food_name: food_name,
      description: description,
      period: period,
  

    }  
    , {
      headers: {
        Authorization: `Bearer ${token}`,
        },
      });
      console.log("message"+response.data.message)
      if(response)
        setMessage(response.data.message);
      // Handle success (e.g., show a notification or redirect)
    } catch (error) {
      if (error.response && error.response.data) {
        // Display error messages from the backend
        console.error(error.response.data); 
        alert("Error: " + error.response.data.message);  // Or display errors in a more user-friendly way
      } else {
        console.error("Network error: ", error);
      }
    }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="trip-form">
      {message && <div className="message">{message}</div>}
      <div className="form-group">
        <label>food Name</label>
        <input
          type="text"
          name="food_name"
          value={food_name}
          onChange={(e) => setfood_name(e.target.value)}
          placeholder="food name"
        />
        {food_name_error && <div className="error">{food_name_error}</div>}
      </div>
      
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
        />
        {description_error && <div className="error">{description_error}</div>}
      </div>
      
      
      <div className="form-group">
        <label>Period</label>
        <input
          type="number"
          name="period"
          value={period}
          onChange={(e) => setperiod(e.target.value)}
          placeholder="food period"
        />
        {period_error && <div className="error">{period_error}</div>}
      </div>
      <button type="submit" className="submit-button">Add food</button>
    </form>
  );}

export default AddFood;
