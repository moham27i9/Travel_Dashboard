import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';

function AddStopStation() {
  const [stopStation_name, setstopStation_name] = useState('');
  const [stopStation_name_error, setstopStation_nameError] = useState('');
 
  const [description, setDescription] = useState('');
  const [period, setperiod] = useState('');
  const [type, setType] = useState('');
  const [description_error, setDescriptionErr] = useState('');
  const [period_error, setperiodErr] = useState('');
  const [type_error, setTypeErr] = useState('');
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('token');
  const {trip_id} = useParams();

  const tr_id = localStorage.getItem('trrip_id');
  const handleSubmit = async (e) => {
    let isValid = true;

    if (!stopStation_name) {
      setstopStation_nameError(' يجب إدخال أسم الموقف' );
      isValid = false;
    } else {
      setstopStation_nameError('');
    }
   
    if (!type) {
      setTypeErr('  يجب إدخال  نوع الموقف' );
      isValid = false;
    } else {
      setTypeErr('');
    }

    if (!period) {
      setperiodErr('  يجب إدخال الفترة الزمنية' );
      isValid = false;
    } else {
      setperiodErr('');
    }

  
    e.preventDefault();
    if(isValid){

      try {
        const response = await axios.post( `http://localhost:8000/api/add_StopStation/${tr_id}`, 
        {
      StopStation_name: stopStation_name,
      type: type,
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
        <label>stopStation Name</label>
        <input
          type="text"
          name="stopStation_name"
          value={stopStation_name}
          onChange={(e) => setstopStation_name(e.target.value)}
          placeholder="stopStation name"
        />
        {stopStation_name_error && <div className="error">{stopStation_name_error}</div>}
      </div>
      
      <div className="form-group">
        <label>type</label>
        <input
          type="text"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="type"
        />
        {type_error && <div className="error">{type_error}</div>}
      </div>
      
      
      <div className="form-group">
        <label>Period</label>
        <input
          type="number"
          name="period"
          value={period}
          onChange={(e) => setperiod(e.target.value)}
          placeholder="stopStation period"
        />
        {period_error && <div className="error">{period_error}</div>}
      </div>
      <button type="submit" className="submit-button">Add StopStation</button>
    </form>
  );}

export default AddStopStation;
