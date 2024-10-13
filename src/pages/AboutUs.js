import React, { useState, useEffect } from 'react';
import '../App.css';
import { Navigate,useLocation, useNavigate, useParams } from 'react-router-dom';


const AboutUS = () =>{
  

    return(
    
        <div class="about-container">
        <h2>About Us</h2>
        <p>Welcome to Tourism application, your ultimate travel companion. Whether you're a seasoned globetrotter or planning your first adventure, our app is designed to make your travel experience seamless, enjoyable, and unforgettable.</p>
        
        <h3>Our Mission</h3>
        <p>At Tourism application, our mission is to inspire and empower travelers to explore the world with confidence. We believe that travel is not just about reaching a destination, but about the journey, the experiences, and the memories you create along the way.</p>
        
        <h3>What We Offer</h3>
        <ul>
          <li><strong>Comprehensive Travel Planning:</strong> From finding the perfect destination to booking flights and accommodations, our app covers all aspects of travel planning.</li>
          <li><strong>Curated Experiences:</strong> Discover unique activities and local experiences that make your trip truly special. Whether it's a guided tour, a culinary adventure, or an outdoor excursion, we've got you covered.</li>
          <li><strong>Personalized Recommendations:</strong> Based on your preferences and interests, we provide tailored suggestions to enhance your travel experience.</li>
          <li><strong>Real-time Updates:</strong> Stay informed with real-time updates on weather, flight status, and local events to ensure a smooth journey.</li>
        </ul>
        
        <h3>Our Values</h3>
        <ul>
          <li><strong>Customer-Centric:</strong> Your satisfaction is our top priority. We strive to provide exceptional service and support to make your travel experience hassle-free.</li>
          <li><strong>Innovation:</strong> We continuously innovate and improve our app to bring you the latest features and the best user experience.</li>
          <li><strong>Sustainability:</strong> We are committed to promoting sustainable travel practices that protect the environment and support local communities.</li>
        </ul>
        
        <h3>Our Team</h3>
        <p>Our team is a diverse group of travel enthusiasts, tech experts, and customer service professionals who are passionate about making travel accessible and enjoyable for everyone. We bring together our expertise and love for travel to create an app that meets your needs and exceeds your expectations.</p>
        
        <h3>Contact Us</h3>
        <p>We love hearing from our users! If you have any questions, feedback, or suggestions, please don't hesitate to reach out to us at support@gmail.com or follow us on Social media.</p>
        
        <p>Thank you for choosing Tourism application as your travel companion. Let's explore the world together!</p>
      </div>
)

}


export default AboutUS