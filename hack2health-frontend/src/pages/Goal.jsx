import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Goal = () => {
  const [goalData, setGoalData] = useState({
    distance: '',
    calories: '',
    meditation: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGoalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <form>
          <Box
            bgcolor={'#FFFFFF'}
            display='flex'
            flexDirection={'column'}
            maxWidth={400}
            alignItems={'center'}
            justifyContent={'center'}
            margin={'auto'}
            marginTop={10}
            padding={5}
            borderRadius={10}
            sx={{ ':hover': { boxShadow: '3px 3px 3px grey' }}}
            css={{ '@media (max-width: 600px)': { width: '90%', padding: 5 }}}
          >
            <Typography variant='h3' textAlign={'center'} padding={3} fontFamily={'fantasy'}>
              <img alt='setgoal' src="https://cdn-icons-png.flaticon.com/512/9119/9119230.png" style={{ height: '50px' }} /> Set your Daily Goals
            </Typography>
            <br />
            <TextField
              name='distance'
              label='Enter Distance'
              type='text' 
              fullWidth
              value={goalData.distance}
              onChange={handleInputChange}
            />
            <br />
            <TextField
              name='calories'
              label='Enter Calories'
              type='text' 
              fullWidth
              value={goalData.calories}
              onChange={handleInputChange}
            />
            <br />
            <TextField
              name='meditation'
              label='Enter Meditation Time'
              type='text' 
              fullWidth
              value={goalData.meditation}
              onChange={handleInputChange}
            />
            <br />
            <Link
              to={{
                pathname: '/home',
                search: `?distance=${goalData.distance}&calories=${goalData.calories}&meditation=${goalData.meditation}`,
              }}
            >
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ color: 'white', bgcolor: 'teal', marginTop: 2, borderRadius: 1, ':hover': { bgcolor: 'darkgreen' }}}
              >
                Set Goal
              </Button>
            </Link>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Goal;
