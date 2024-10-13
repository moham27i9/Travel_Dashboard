import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';

function OfferForm() {
  const [offer_name, setOffer_name] = useState('');
  const [offer_name_error, setOffer_nameError] = useState('');
  const [price, setPrice] = useState('');
  const [price_error, setPriceErr] = useState('');
  const [description, setDescription] = useState('');
  const [description_error, setDescriptionErr] = useState('');
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('token');
  const {trip_id} = useParams();

  const tr_id = localStorage.getItem('trrip_id');
  const handleSubmit = async (e) => {
    let isValid = true;

    if (!offer_name) {
      setOffer_nameError(' يجب إدخال أسم العرض' );
      isValid = false;
    } else {
      setOffer_nameError('');
    }
    if (!description) {
      setDescriptionErr(' يجب إدخال  الوصف' );
      isValid = false;
    } else {
      setDescriptionErr('');
    }

    if (!price) {
      setPriceErr('  يجب إدخال السعر' );
      isValid = false;
    } else {
      setPriceErr('');
    }

   
console.log("iddddddd",tr_id)
    e.preventDefault();
    if(isValid){

      try {
        const response = await axios.post( `http://localhost:8000/api/add_offer/${tr_id}`, 
        {
      offer_name: offer_name,
      description: description,
      price: price,

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
        <label>Offer Name</label>
        <input
          type="text"
          name="offer_name"
          value={offer_name}
          onChange={(e) => setOffer_name(e.target.value)}
          placeholder="offer name"
        />
        {offer_name_error && <div className="error">{offer_name_error}</div>}
      </div>
      
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Departure Location"
        />
        {description_error && <div className="error">{description_error}</div>}
      </div>
      
      
      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Trip Price"
        />
        {price_error && <div className="error">{price_error}</div>}
      </div>
      <button type="submit" className="submit-button">Add Offer</button>
    </form>
  );}

export default OfferForm;
