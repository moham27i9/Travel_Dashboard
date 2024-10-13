import React, { useState, useEffect } from 'react';
import '../App.css';
import { Navigate,useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const DeleteTrip = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const trav_id = location.state;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [msg, setMessage] = useState('');

  // تأكد من وجود token قبل إجراء الطلب
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchTravelData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        console.log("travel_id is here", id);
        console.log("token is hereeeeeeeeeeeee", token);

        const response = await axios.post(
          `http://localhost:8000/api/delete_Trip/${id}`,
          {}, 
          {
            headers: {
              Authorization: `Bearer ${token}`, // تأكد من الفراغ  
            },
          }
        );

        // navigate('/Show_travel');

        if (response) {

          setMessage(response.data.message);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    // تأكد من وجود token قبل إجراء الطلب
    if (token) {
      fetchTravelData();
    }
  }, [token]);

  if (isLoading) {
    return <p>Loading...</p>;
  }


  return (
    <div>
      <h2>{msg}</h2>
    </div>
  );
};

export default DeleteTrip;
