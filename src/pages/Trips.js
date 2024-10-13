import React, { useState, useEffect } from 'react';
import '../App.css';
import Trip from './Trip';

function Trips() {
  const [travelData, setTravelData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [searchField, setSearchField] = useState('site_name'); // حقل لاختيار نوع البحث

  // احصل على token من local storage أو من مكان آخر
  const user_id = localStorage.getItem('user_id');
  const token = localStorage.getItem('token');

  
  
  
  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      let apiUrl = 'http://localhost:8000/api/show_trips';
      if (searchTerm) { 
        apiUrl = `http://localhost:8000/api/search_OnTrip?${searchField}=${searchTerm}`; 
      }
      
      console.log("apiUrl", apiUrl);
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch users data');
      }

      const data = await response.json();
      setTravelData(data.trips); // تأكد من أن الاستجابة تحتوي على users
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // جلب جميع المستخدمين عند تحميل الصفحة لأول مرة
    handleSearch(); 
  }, [token]); 

  
  // if (!travelData) {
  //   return <p>No trip data available.</p>;
  // }

  return (
    <div className="container1">
      <h2>Trips</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="بحث عن رحلة..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <div className='custom-select-container'>

        <p>search By</p>
        <select className='custom-select' value={searchField} onChange={(e) => setSearchField(e.target.value)}>
          <option value="site_name">Site Name</option>
          <option value="departure_location">Departure Location</option>
          <option value="price">Price</option>
        </select>
        </div>
        <button className="Delete-button" onClick={handleSearch}>
          Search
        </button>
        </div>
      <div className="trip-list">
        {isLoading && <p>Loading...</p>}
    
        {!isLoading && !error && travelData && travelData.map((trip) => (
          <Trip key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}

export default Trips;
