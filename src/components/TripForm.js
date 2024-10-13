import React, { useState } from 'react';
import axios from 'axios';

function TripForm() {
  const [site_name, setSiteName] = useState('');
  const [site_name_error, setSiteNameError] = useState('');
  const [departure_location, setDepartureLocation] = useState('');
  const [departure_location_error, setDepartureLocErr] = useState('');
  const [departure_date, setDepartureDate] = useState('');
  const [departure_date_error, setDepartureDatErr] = useState('');
  const [country_name, setCountryName] = useState('');
  const [country_name_error, setCountryNaErr] = useState('');
  const [price, setPrice] = useState('');
  const [price_error, setPriceErr] = useState('');
  const [hotels_name, setHotelsName] = useState('');
  const [hotels_name_error, setHotelsNaErr] = useState('');
  const [period, setPeriod] = useState('');
  const [period_error, setPeriodErr] = useState('');
  const [service_degree, setServiceDegree] = useState(''); 
  const [service_degree_error, setServiceDegErr] = useState(''); 
  const [category, setCategory] = useState(''); 
  const [category_error, setcategoryErr] = useState(''); 
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    let isValid = true;

    if (!site_name) {
      setSiteNameError(' يجب إدخال أسم الموقع' );
      isValid = false;
    } else {
      setSiteNameError('');
    }
    if (!category) {
      setcategoryErr(' يجب إدخال  الفئة' );
      isValid = false;
    } else {
      setcategoryErr('');
    }
    if (!departure_location) {
      setDepartureLocErr('  يجب إدخال  موقع الانطلاق' );
      isValid = false;
    } else {
      setDepartureLocErr('');
    }
    if (!departure_date) {
      setDepartureDatErr('  يجب إدخال موعد الانطلاق' );
      isValid = false;
    } else {
      setDepartureDatErr('');
    }
    if (!country_name) {
      setCountryNaErr('  يجب إدخال اسم البلد' );
      isValid = false;
    } else {
      setCountryNaErr('');
    }
    if (!price) {
      setPriceErr('  يجب إدخال السعر' );
      isValid = false;
    } else {
      setPriceErr('');
    }
    if (!period) {
      setPeriodErr('  يجب إدخال مدة الرحلة' );
      isValid = false;
    } else {
      setPeriodErr('');
    }
    if (!hotels_name) {
      setHotelsNaErr('  يجب إدخال اسم الفندق' );
      isValid = false;
    } else {
      setHotelsNaErr('');
    }
    if (!service_degree) {
      setServiceDegErr('  يجب إدخال درجة الرحلة' );
      isValid = false;
    } else {
      setServiceDegErr('');
    }

    e.preventDefault();
    if(isValid){

      try {
        const response = await axios.post('http://localhost:8000/api/add_trip', 
        {
      site_name: site_name,
      departure_location: departure_location,
      departure_date: departure_date,
      country_name: country_name,
      price: price,
      hotels_name: hotels_name,
      period: period,
      category: category,
      service_degree: service_degree,

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
        <label>Site Name</label>
        <input
          type="text"
          name="site_name"
          value={site_name}
          onChange={(e) => setSiteName(e.target.value)}
          placeholder="Site Name"
        />
        {site_name_error && <div className="error">{site_name_error}</div>}
      </div>
      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        {category_error && <div className="error">{category_error}</div>}
      </div>
      <div className="form-group">
        <label>Departure Location</label>
        <input
          type="text"
          name="departure_location"
          value={departure_location}
          onChange={(e) => setDepartureLocation(e.target.value)}
          placeholder="Departure Location"
        />
        {departure_location_error && <div className="error">{departure_location_error}</div>}
      </div>
      <div className="form-group">
        <label>Country Name</label>
        <input
          type="text"
          name="country_name"
          value={country_name}
          onChange={(e) => setCountryName(e.target.value)}
          placeholder="Country Name"
        />
        {country_name_error && <div className="error">{country_name_error}</div>}
      </div>
      <div className="form-group">
        <label>Service Degree</label>
        <input
          type="text"
          name="service_degree"
          value={service_degree}
          onChange={(e) => setServiceDegree(e.target.value)}
          placeholder="Service Degree"
        />
        {service_degree_error && <div className="error">{service_degree_error}</div>}
      </div>
      <div className="form-group">
        <label>Hotels Name</label>
        <input
          type="text"
          name="hotels_name"
          value={hotels_name}
          onChange={(e) => setHotelsName(e.target.value)}
          placeholder="Hotels Name"
        />
        {hotels_name_error && <div className="error">{hotels_name_error}</div>}
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
      <div className="form-group">
        <label>Period</label>
        <input
          type="number"
          name="period"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          placeholder="Trip Period"
        />
        {period_error && <div className="error">{period_error}</div>}
      </div>
      <div className="form-group">
        <label>Departure Date</label>
        <input
          type="date"
          name="departure_date"
          value={departure_date}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
        {departure_date_error && <div className="error">{departure_date_error}</div>}
      </div>
      <button type="submit" className="submit-button">Add Trip</button>
    </form>
  );}

export default TripForm;
