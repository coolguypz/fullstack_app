import React, { useState,useEffect } from 'react';
import './register.css';
import Form from './Form';
import axios from 'axios';
import Display from './Display';

const Register = (props) => {

    const [apiData, setApiData] = useState();
    const [location, setlocation] = useState();
    const [inputData, setinputData] = useState({
    username: '',
    password: '',
    email: '',
  });


	const getLocation = async () => {
		await axios
			.get(`https://geolocation-db.com/json/`)
			.then((res) => setlocation(res.data));
	};

  const getAPIData = async () => {
		await axios
			.get(`http://localhost:3001/api`)
			.then((res) => setApiData(res.data));
	};

useEffect(() => {
		getAPIData();
    getLocation();
	}, []);
   

  const handleChange = (e) => {
    setinputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post(`http://localhost:3001/api/post`, {
      ...inputData,
      ip: location.IPv4,
      country: location.country_name,
      state: location.state,
      city: location.city,
      zipcode: location.postal
    }).then(()=>{
      setApiData([
        ...apiData,
        {
        ...inputData,
        ip: location.IPv4,
        country: location.country_name,
        state: location.state,
        city: location.city,
        zipcode: location.postal
        }]
        )
    })
  };


  return (
    <div className='register'>
      <Form
        state={inputData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Display data={apiData} />
    </div>
  );
};

export default Register;
