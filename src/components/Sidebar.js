import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const styles = {
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: 'linear-gradient(to bottom, #470000, #e0e0e0)', // تدرج عمودي من رمادي فاتح إلى رمادي أفتح
    border: '1px solid #ccc', // حدود رمادية

  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  activeLink: {
    backgroundColor: '#e0e0e0', 
    color: '#2196F3', // لون نص أزرق فاتح
  },
};

function Sidebar({ isSidebarOpen, toggleSidebar }) {
  return (
    <Drawer
      variant="temporary"
      open={isSidebarOpen}
      onClose={toggleSidebar}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      PaperProps={{ sx: styles.drawerPaper }}
    >
      <List>
        <ListItem button component={NavLink} to="/" onClick={toggleSidebar} style={styles.link} activeClassName="activeLink">
          <img src="user.png" alt="Trip" className="trip-image" /> 
        

        </ListItem>
    
        <ListItem button component={NavLink} to="/login" onClick={toggleSidebar} style={styles.link} activeClassName="activeLink">
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button component={NavLink} to="/logout" onClick={toggleSidebar} style={styles.link} activeClassName="activeLink">
          <ListItemText primary="logout" />
        </ListItem>
        <ListItem button component={NavLink} to="/AboutUS" onClick={toggleSidebar} style={styles.link} activeClassName="activeLink">
          <ListItemText primary="About Us" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
