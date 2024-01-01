import React from 'react';
import { AppBar, Toolbar, Typography, Box, } from '@mui/material';
import "../styles/Header.css";
import Logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{bgcolor: '#2B4F84'}}>
          <Toolbar>
          <Typography color={"goldenrod"} varient="h6" component="div" sx={{flexGrow:1}}>&nbsp;&nbsp;
          <img alt='Logo' src={Logo} className='logo' style={{height: '60px', width: '350px'}}/>
          </Typography>
          <Box sx={{display: {xs:'none', sm:'block'}}}>
            <ul className='navigation-menu'>
              <li><NavLink activeClassName='active' to="/home">Home</NavLink></li>
              <li><NavLink to="/calender">Set Remainder</NavLink></li>
              <li><NavLink to="/blog">Blogs</NavLink></li>  
              <li><NavLink to="/bpmonitor">Health Monitor</NavLink></li>            
              <li><NavLink to="/goal">My Goals</NavLink></li>
              <li><NavLink to="/editaccount">Edit Profile</NavLink></li>
            </ul>
          </Box>
          </Toolbar>
        </AppBar>
        <Box>
        <Toolbar/>
        </Box>
      </Box>
    </>
  )
}

export default Header;