import React from 'react';
import './form.css';

const Form = (props) => {
	return (
		<div className='form'>
			<div className='input_div'>
				<label htmlFor='username'>Username : </label>
				<input
					type='text'
					id='username'
					placeholder='username'
					name='username'
					value={props.state.username}
					onChange={props.handleChange}
				/>
			</div>
			<div className='input_div'>
				<label htmlFor='password'>Password : </label>
				<input
					type='text'
					id='password'
					placeholder='password'
					name='password'
					value={props.state.password}
					onChange={props.handleChange}
				/>
			</div>
			<div className='input_div'>
				<label htmlFor='email'>Email</label>
				<input
					type='text'
					id='email'
					placeholder='email'
					name='email'
					value={props.state.email}
					onChange={props.handleChange}
				/>
			</div>
			<div className='button' type='submit' onClick={props.handleSubmit}>
				Submit
			</div>
		</div>
	);
};

export default Form;
