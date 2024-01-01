import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import '../styles/Account.css';

const Editaccount = () => {
  const [name,setName] = useState("");

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setName(value);
  }

  return (
    <>
    <div>
      <form>
        <Box
          bgcolor={'#FFFFFF'}
          display='flex'
          flexDirection={'column'}
          maxWidth={1000}
          alignItems={'left'}
          justifyContent={'left'}
          margin={'auto'}
          marginTop={7}
          padding={5}
          borderRadius={10}
          sx={{ ':hover': { boxShadow: '3px 3px 3px grey' }}}
          css={{ '@media (max-width: 600px)': { width: '90%', padding: 5 }}}
        >
          <Typography variant='h3' textAlign={'center'} padding={2} fontFamily={'inter'}>
            Edit Information
          </Typography>
          <br /><br />
          <span>
  <TextField name='Name' style={{ width: '450px', marginRight: '100px' }} type='text' placeholder='First Name' value={name}
              onChange={handleNameChange} />
  <TextField name='Name' style={{ width: '450px' }} type='text' placeholder='Last Name' />
</span>

          <br /><br />
          <label class="gender-label"><div className='gender'>Gender : </div>
  <input type="radio" name="gender" value="male" class="gender-radio"/>
  <span class="gender-button"></span> Male
  <div className='gender'></div>
  <input type="radio" name="gender" value="female" class="gender-radio"/>
  <span class="gender-button"></span> Female
  <div className='gender'></div>
  <input type="radio" name="gender" value="others" class="gender-radio"/>
  <span class="gender-button"></span> Other
</label>

          <br /><br />
<select id="age" name="age" class="gender-label" style={{height: '50px', width:'1000px'}}>
  <option value="select" className='select'> &nbsp;&nbsp;--Select your Age category--</option>  
  <option value="0-17">0-17</option>
  <option value="18-24">18-24</option>
  <option value="25-34">25-34</option>
  <option value="35-44">35-44</option>
  <option value="45-54">45-54</option>
  <option value="55-64">55-64</option>
  <option value="65+">65+</option>
</select>
          <br /><br />
          <span>
  <TextField name='Name' style={{ width: '450px', marginRight: '100px' }} type='number' placeholder='Weight (in kg)' />
  <TextField name='Name' style={{ width: '450px' }} type='number' placeholder='Height (in cm)' />
</span><br /><br />
<Link
  to={{
    pathname: '/home',
    search: `&name=${name}`,
  }}
>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ color: 'white', bgcolor: 'teal', marginTop: 2, borderRadius: 1, ':hover': { bgcolor: 'darkgreen' }}}>
            Edit Profile
          </Button></Link>
          <br />
        </Box>
      </form>
    </div>
    </>
  );
};

export default Editaccount;
