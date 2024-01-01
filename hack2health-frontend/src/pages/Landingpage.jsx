import React from 'react';
import '../styles/Landingpage.css';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import Image from '../images/bgimage.png';

const Home = () => {
  return (
    <>
      <div className='background'>
        <div>
          <img alt='Logo' src={Logo} className='logo' />
        </div>
        <div className='tagline'>Unlock Your Wellness Potential with Hack2Health</div>
        <img alt='design' src={Image} className='image1' />
      </div>
      <div className='health'>Your Health in your hands,<br />not in your Memory!</div>
      <Link to="/Signup">
        <button className='register'>
          <i>Get Started</i>
          </button>
        </Link>

    </>
  );
}

export default Home;
