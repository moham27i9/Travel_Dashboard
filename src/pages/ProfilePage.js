import React, { useState, useEffect } from 'react';
import '../styles.css';
import { useParams } from 'react-router-dom';


function ProfilePage() {
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [balance, setBalance] = useState('');
  const [birthday, setBirthday] = useState('');
  const [image, setImage] = useState(null);

  // احصل على token من local storage أو من مكان آخر
  const token = localStorage.getItem('token');
const {id} = useParams()

  const handleImageError = (e) => {
    e.target.src = '/user.png'; // مسار الصورة البديلة في مجلد الـ public
  };
 
  useEffect(() => {
    const fetchProfileData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:8000/api/show_userprofile/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`, // أضف رأس التفويض مع token
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }

        const data = await response.json();
      
        console.log("image",data.image);
        setName(data.profile.name)
        setGender(data.profile.gender)
        setBalance(data.profile.balance)
        setImage(data.image)
        setBirthday(data.profile.birthday)
        setProfileData(data.profile);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    // تأكد من وجود token قبل إجراء الطلب
    if (token) {
      fetchProfileData();
    }
  }, [token]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!profileData) {
    return <p>No profile data available.</p>;
  }

  // عرض بيانات الملف الشخصي
 
  if (profileData) {
  return (

  <div class="profile-container">
  <div class="profile-header">
    <div class="profile-image">
      <img className = "profile-headerimg" src={image} alt="صورة المستخدم" />
    </div>
    <div class="profile-info">
    <h2>{name}</h2>
    </div>
  </div>
  <div class="profile-details">
    <div class="detail-item">
    <h3>gender:</h3>
    <p> {gender}</p>
    </div>
    <div class="detail-item">
      <h3>Balance:</h3>
      <p>{balance} $</p>
    </div>
    <div class="detail-item">
      <h3>Birthday:</h3>
      <p>{birthday}</p>
    </div>
  </div>
</div>

  );
}
}

export default ProfilePage