import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Register from './Components/Register';

function App() {
	const [location, setlocation] = useState();

	const getLocation = async() => {
		await axios
			.get(`https://geolocation-db.com/json/`)
			.then((res) => setlocation(res.data));
	};

	useEffect(() => {
		getLocation();
	}, []);

	return (
		<div className='App'>
			<Register location={location} />
		</div>
	);
}

export default App;
