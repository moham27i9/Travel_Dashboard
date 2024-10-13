import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import '../App.css';

function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  if(token){

    return (
      <div className="main-container">
      <Typography variant="h3" gutterBottom>
     

      </Typography>
    
      <List>
    
        <div className="container3">
        <ListItem button component={NavLink} to="/trips"  activeClassName="activeLink">
          <ListItemText primary="Trips" />
          <img src="plane-alt.png" alt="*" className="bar-image" />
        </ListItem>
      </div>
        <div className="container3">
        <ListItem button component={NavLink} to="/touristSpots"  activeClassName="activeLink">
          <ListItemText primary="Suggestions" />
          <img src="sparkles.png" alt="*" className="bar-image" />
        </ListItem>
      </div>
      <div className="container3">
        <ListItem button component={NavLink} to="/users"   activeClassName="activeLink">
          <ListItemText primary="Users" />
          <img src="users-alt.png" alt="*" className="bar-image" />
        </ListItem>
        </div>
        <div className="container3">
        <ListItem button component={NavLink} to="/add-trip"   activeClassName="activeLink">
          <ListItemText primary="Add Trip" />
          <img src="add.png" alt="*" className="bar-image" />
        </ListItem>
        </div>
        {/* <div className="container3">
        <ListItem button component={NavLink} to="/wallet"   activeClassName="activeLink">
        <ListItemText primary="Wallet" />
        </ListItem>
        </div> */}
        <div className="container3">
        <ListItem button component={NavLink} to="/Reservations"   activeClassName="activeLink">
          <ListItemText primary="Reservations  " />
          <img src="list.png" alt="*" className="bar-image" />
        </ListItem>
        </div>
        <div className="container3">
        <ListItem button component={NavLink} to="/Complaints"   activeClassName="activeLink">
          <ListItemText primary="Complaints" />
          <img src="megaphone.png" alt="*" className="bar-image" />
        </ListItem>
        </div>
      </List>
      {/* Add dashboard content here */}
    </div>
  );
}
if(!token){
  return(
    navigate('/login')
  )
}

}

export default Dashboard;
