import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';

function AddActivity() {
  const [activity_name, setactivity_name] = useState('');
  const [activity_name_error, setactivity_nameError] = useState('');
 
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

    if (!activity_name) {
      setactivity_nameError(' يجب إدخال أسم العرض' );
      isValid = false;
    } else {
      setactivity_nameError('');
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

    if (!type) {
      setTypeErr('  يجب إدخال  نوع النشاط' );
      isValid = false;
    } else {
      setTypeErr('');
    }

   
console.log("iddddddd",tr_id)
    e.preventDefault();
    if(isValid){

      try {
        const response = await axios.post( `http://localhost:8000/api/add_activity/${tr_id}`, 
        {
      activity_name: activity_name,
      description: description,
      period: period,
      type: type,

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
        <label>activity Name</label>
        <input
          type="text"
          name="activity_name"
          value={activity_name}
          onChange={(e) => setactivity_name(e.target.value)}
          placeholder="activity name"
        />
        {activity_name_error && <div className="error">{activity_name_error}</div>}
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
          placeholder="Trip period"
        />
        {period_error && <div className="error">{period_error}</div>}
      </div>
      <button type="submit" className="submit-button">Add activity</button>
    </form>
  );}

export default AddActivity;
