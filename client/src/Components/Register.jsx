import React, { useState } from 'react';
import Form from './Form';
import axios from 'axios';

const Register = (props) => {
	const [inputData, setinputData] = useState({
		username: '',
		password: '',
		email: '',
	});

	const handleChange = (e) => {
		setinputData({ ...inputData, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		axios.post(`http://localhost:3001/api/post`, {
			...inputData,
			ip: props.location.IPv4,
			country: props.location.country_name,
			state: props.location.state,
			city: props.location.city,
			zipcode: props.location.postal,
		});
	};

	return (
		<div className='register'>
			<Form
				state={inputData}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>
		</div>
	);
};

export default Register;