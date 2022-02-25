import React from 'react';
import './display.css';

const Display = (props) => {
	const apiData = props.data?.map((v,i) => {
		return (
			<div key={i} className='displayData'>
				<div className='col-1'>{v.id}</div>
				<div className='col-2'>{v.username}</div>
				<div className='col-3'>{v.email}</div>
				<div className='col-4'>{v.ip}</div>
			</div>
		);
	});
	return (
		<div className='display'>
			<div className='col-head'>
				<div className='col-1'>id</div>
				<div className='col-2'>username</div>
				<div className='col-3'>email</div>
				<div className='col-4'>ip</div>
			</div>
			<div className='col-body'>{apiData}</div>
		</div>
	);
};

export default Display;
