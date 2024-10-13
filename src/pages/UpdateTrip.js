import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Input, Typography } from '@mui/material';

const UpdateTrip = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [site_name, setSiteName] = useState('');
  const [site_name_error, setSiteNameError] = useState('');
  const [departure_location, setDepartureLocation] = useState('');
  const [departure_location_error, setDepartureLocErr] = useState('');
  const [departure_date, setDepartureDate] = useState('');
  const [departure_date_error, setDepartureDatErr] = useState('');
  const [country_name,setCountryName ] = useState('');
  const [country_name_error, setCountryNaErr] = useState('');
  const [price, setPrice] = useState('');
  const [price_error, setPriceErr] = useState('');
  const [hotels_name, setHotelsName] = useState('');
  const [hotels_name_error, setHotelsNaErr] = useState('');
  const [period, setPeriod] = useState('');
  const [period_error, setPeriodErr] = useState('');
  const [service_degree, setServiceDegree] = useState(''); 
  const [service_degree_error, setServiceDegErr] = useState(''); 
  const [message, setMessage] = useState(''); 
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchtripData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/show_selected_trip/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.trip) { 
          const tripData = response.data.trip; //  تصحيح  استخراج  البيانات
          setSiteName(tripData.site_name);
          setDepartureLocation(tripData.departure_location);
          setDepartureDate(tripData.departure_date);
          setCountryName(tripData.country_name);
          setPrice(tripData.price);
          setHotelsName(tripData.hotels_name);
          setPeriod(tripData.period);
          setServiceDegree(tripData.service_degree);
      
        }
      } catch (error) {
        console.error('Error fetching trip data:', error);
      }
    };

    if (id) {
      fetchtripData();
    }
  }, [id, token]); //  أضف  token  إلى  مصفوفة  التبعية



  const handleSubmit = async (e) => {
    e.preventDefault();

    //  التحقق  من  صحة  البيانات  (يمكنك  إضافة  المزيد  من  التحقق  هنا)
    let isValid = true;
    if (!site_name  ||!departure_location || !departure_date||  !country_name || !hotels_name || !price || !period || !service_degree) {
      isValid = false;
      setMessage('يرجى ملئ حقل واحد على الأقل حتى تتم عملية التعديل   ');
    }

    if (isValid) {
      try {
        const formData = new FormData();
        formData.append('site_name', site_name);
        formData.append('departure_location', departure_location);
        formData.append('departure_date', departure_date);
        formData.append('country_name', country_name);
        formData.append('hotels_name', hotels_name);
        formData.append('price', price);
        formData.append('period', period);
        formData.append('service_degree', service_degree);
  
        const response = await axios.post(`http://localhost:8000/api/update_Trip/${id}`, 
          { 
          site_name: site_name,
          departure_location: departure_location,
          departure_date: departure_date,
          country_name: country_name,
          price: price,
          hotels_name: hotels_name,
          period: period,
          service_degree: service_degree,
       
      }, {
          headers: {
            'Content-Type': 'application/json', //  هام  لـ  FormData
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
               
          setMessage('تم  تحديث  الرحلة  بنجاح');
          setTimeout(() => {
            navigate(`/Show_selected/${id}`); 
          }, 1500);
        } else {
          setMessage('حدث  خطأ  أثناء  تحديث  الرحلة');
        }
      } catch (error) {
        console.error('Error updating trip:', error);
        setMessage('حدث  خطأ  أثناء  الاتصال  بالخادم');
      }
      
    }
  };
  return (
    <div className='add_trip'>

     <form onSubmit={handleSubmit} className="trip-form">

      {message && (
        <Typography variant="body1" color={message.includes('بنجاح') ? 'green' : 'error'} gutterBottom>
          {message}
        </Typography>
      )}
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
        <label>Departure Location</label>
        <input
          type="text"
          name="departure_location"
          value={departure_location}
          onChange={(e) => setDepartureLocation(e.target.value)}
          placeholder="Departure Location"
        />
        {departure_location_error && (
          <div className="error">{departure_location_error}</div>
        )}
      </div>
      <div className="form-group">
        <label>Departure Date</label>
        <input
          type="date"
          name="departure_date"
          value={departure_date}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
        {departure_date_error && (
          <div className="error">{departure_date_error}</div>
        )}
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
        {country_name_error && (
          <div className="error">{country_name_error}</div>
        )}
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
        <label>Hotels Name</label>
        <input
          type="text"
          name="hotels_name"
          value={hotels_name}
          onChange={(e) => setHotelsName(e.target.value)}
          placeholder="Hotels Name"
        />
        {hotels_name_error && (
          <div className="error">{hotels_name_error}</div>
        )}
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
        <label>Service Degree</label>
        <input
          type="text"
          name="service_degree"
          value={service_degree}
          onChange={(e) => setServiceDegree(e.target.value)}
          placeholder="Service Degree"
        />
        {service_degree_error && (
          <div className="error">{service_degree_error}</div>
        )}
      </div>
    
        <button type="submit" className="submit-button">
        Update Trip
      </button>
    </form>

     
    </div>
  );
  
}
export default UpdateTrip;