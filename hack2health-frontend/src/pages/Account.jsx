import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import '../styles/Account.css';
import axios from "axios";

const Account = () => {
  const [name,setName] = useState("");
  const [data, setData] = useState([]);
  const [getCountry, setCountry] = useState();
  const [cities, setCities] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    axios
      .get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const country = [...new Set(data.map((item) => item.country))];
  country.sort();

  const handleCountry = (e) => {
    setCountry(e.target.value);
    const filteredCities = data
      .filter((city) => city.country === e.target.value)
      .map((city) => city.name)
      .sort();
    setCities(filteredCities);
  };

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
          marginTop={3}
          padding={3}
          borderRadius={10}
          sx={{ ':hover': { boxShadow: '3px 3px 3px grey' }}}
          css={{ '@media (max-width: 600px)': { width: '90%', padding: 5 }}}
        >
          <Typography variant='h3' textAlign={'center'} padding={2} fontFamily={'inter'}>
            Let's start with your basic information!
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
</label><br/><br/>

<div className="address">
                <div className="input-container">
                  <label className="label1">Country</label>
                  <div className="input-with-icon">
                    <select className="dropdown-box" placeholder="USA" onChange={(e) => handleCountry(e)} value={getCountry}>
                      <option>USA</option>
                      {country.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="input-container">
                  <label className="label1">City</label>
                  <div className="input-with-icon">
                    <select className="dropdown-box">
                      <option className="line3">Georgia</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

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
    search: `?name=${name}`,
  }}>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ color: 'white', bgcolor: 'teal', marginTop: 2, borderRadius: 1, ':hover': { bgcolor: 'darkgreen' }}}>
            Confirm Details
          </Button></Link>
          <br />
        </Box>
      </form>
    </div>
    </>
  );
};

export default Account;
