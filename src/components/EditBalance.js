import React, { useState, useEffect } from 'react';
import axios from 'axios'; // أو  fetch API
import { useParams } from 'react-router-dom'; // أو  props

const EditBalance = () => {
  const { id } = useParams(); //  أو  استخدم  props  لِحصول  id
  const [new_balance, setnewBalance] = useState('');
  const [newBalance_error, setnewBalanceError] = useState('');
 
  const [message, setMessage] = useState(''); 
  const token = localStorage.getItem('token');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // التحقق من صحة البيانات
    let isValid = true;

 

    if (isValid) {
      try {
        const response = await axios.post(`http://localhost:8000/api/updateBalance/${id}`, {
            new_balance: new_balance,

         
        }, {
            headers: {
              Authorization: `Bearer ${token}`, // تأكد من الفراغ 
            },
        });
        setMessage('تم تحديث  الرصيد  بنجاح');
        // ...  قم  بِمعالجة  الاستجابة  من  API
      } catch (error) {
        console.error('Error updating balance:', error);
        //  قم  بِمعالجة  الخطأ  بشكل  مناسب
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="trip-form">
      {message && <div className="message">{message}</div>}
      <div className="form-group">
        <label>Total Balance</label>
        <input
          type="number"
          name="new balance"
          value={new_balance}
          onChange={(e) => setnewBalance(e.target.value)}
          placeholder="Enter new balance"
        />
        {newBalance_error && <div className="error">{newBalance_error}</div>}
      </div>
      
      <button type="submit" className="submit-button">
        Update Balance
      </button>
    </form>
  );
};

export default EditBalance;