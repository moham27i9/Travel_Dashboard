import React, { useState, useEffect } from 'react';
import '../App.css';
import { Navigate,useNavigate } from 'react-router-dom';

function User({ user }) { // تغيير اسم prop
    const navigate = useNavigate();
  
    const handleEdit = (userId) => {
      navigate(`/EditBalance/${userId}`);
    };
    const handleDelete = (userId) => {
      navigate(`/DeleteUser/${userId}`);
    };
    const handleShow = (userId) => {
      navigate(`/ShowUserProfile/${userId}`);
    };
  
    return (
      <div className="container2">
        {/* <img src="./images/bb.png" alt="User" className="user-image" />  */} {/*  إضافة صورة للمُستخدم إن أردت  */}
        <img className="container2img" src="user.png" alt="Trip"  /> 
        <h3>{user.first_name} {user.last_name}</h3>
        <h5>{user.email}</h5>
        {/* <h3>{user.price} L.S</h3>  */} {/*  إزالة  price  */}
        <div className="buttons">
          <button className="Travel-button" onClick={() => handleShow(user.id)}>
         show profile
          </button>
          <button className="Travel-button" onClick={() => handleEdit(user.id)}>
             balance update
          </button>
          <button className="Delete-button" onClick={() => handleDelete(user.id)}>
            delete
          </button>
        </div>
      </div>
    );
  }
  
  export default User;
  