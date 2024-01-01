import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/Home.css';

function Home() {
  const location = useLocation(); 
  const queryParams = new URLSearchParams(location.search);

  const distance = queryParams.get('distance');
  const calories = queryParams.get('calories');
  const meditation = queryParams.get('meditation');
  const name = queryParams.get('name');
  return (
    <>
    <div className='bg'>
    <Layout>
    <div>
      <h1>Welcome, {name}!</h1>
      </div>
      <div className='container'>
        <div className='item1'>
          <div className='goals'>Distance to be Covered</div>
          <img alt='footsteps.jpg' src='https://cdn-icons-png.flaticon.com/512/8682/8682406.png' style={{height: '60px', marginLeft: '120px'}}/>
          <div className='goal'>{distance} kms</div>
        </div>
        <div className='item2'>
        <div className='goals2'>Calories to be Burnt</div>
        <img alt='calories.jpg' src='https://cdn-icons-png.flaticon.com/512/9586/9586326.png' style={{height: '60px', marginLeft: '120px'}}/>
          <div className='goal2'>{calories} cal</div>
        </div>
        <div className='item3'>
        <div className='goals3'>Meditation Time</div>
        <img alt='meditation.jpg' src='https://cdn-icons-png.flaticon.com/512/8086/8086179.png' style={{height: '60px', marginLeft: '120px'}}/>
        <div className='goal3'>{meditation} mins</div>
        </div>
      </div>
    <div className='br'>
        <a href='https://findahelpline.com/in/ka'>
          <button className='ngo'>Contact NGO</button>
          </a>
          </div>
    </Layout>
    </div>
    </>
  );
};

export default Home;
  
