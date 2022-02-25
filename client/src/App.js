import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Register from './Components/Register';

function App() {
	const [location, setlocation] = useState();
	const [data, setData] = useState();

	const getLocation = async () => {
		await axios
			.get(`https://geolocation-db.com/json/`)
			.then((res) => setlocation(res.data));
	};

	const getData = async () => {
		await axios
			.get(`http://localhost:3001/api`)
			.then((res) => setData(res.data));
	};

	useEffect(() => {
		getLocation();
		getData();
	}, []);

	return (
		<div className='App'>
			<Register location={location} data={data}/>
		</div>
	);
}

export default App;
