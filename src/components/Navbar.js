import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../App.css';
import { useNavigate } from 'react-router-dom';
function Navbar({ toggleSidebar }) {
  const navigate= useNavigate();
  const handleshow=()=>{
      
    navigate('/Main')
  
   }
  const handleshowlogin=()=>{
      
    navigate('/Login')
  
   }
  const handleshow_wallet=()=>{
      
    navigate('/wallet')
  
   }
  return (
   
    <AppBar position="dynamic">
      <div className ="nav-bar">
      <Toolbar>
        <IconButton edge="start" aria-label="menu" onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
     
        <Typography variant="h6">
          Tourism Dashboard
          <button color="inherit" className="bar-button" onClick={()=>handleshow()}> <img src="./home.png" alt="*" className="bar-image" /> Main</button>
          <button color="inherit" className="bar-button" onClick={()=>handleshowlogin()}>  <img src="./address-book.png" alt="*" className="bar-image" /> Login</button>
          <button color="inherit" className="bar-button" onClick={()=>handleshow_wallet()}>  <img src="./coins.png" alt="*" className="bar-image" /> Wallet</button>
        </Typography>
      </Toolbar>
      
        </div>
        
    </AppBar>
  
  );
}

export default Navbar;
