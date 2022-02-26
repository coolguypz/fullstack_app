import React from 'react';
import './display.css';

const Display = (props) => {

	const apiData = props.data?.map((v,i) => {
		return (
			<div key={i} className='displayData'>
				
				<div className='col-1'>{v.username}</div>
				<div className='col-2'>{v.email}</div>
				<div className='col-3'>{v.ip}</div>
				<div className = 'col-4'>
				<div className = 'col-upd' onClick = {()=>props.handleUpdate(v.id)}>
				Update
				</div>
				<div className = 'col-del'onClick = {()=>props.handleDelete(v.id)}>
				Delete
				</div>
				</div>
			</div>
		);
	});
	return (
		<div className='display'>
			<div className='col-head'>
				
				<div className='col-1'>username</div>
				<div className='col-2'>email</div>
				<div className='col-3'>ip</div>
				<div className = 'col-4'>button</div>
			</div>
			<div className='col-body'>{apiData}</div>
		</div>
	);
};

export default Display;
