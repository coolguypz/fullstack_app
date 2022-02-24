import React from 'react';

const Form = (props) => {
	return (
		<div className='form'>
			<div className='input_div'>
				<label htmlFor='username'>Username</label>
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
				<label htmlFor='password'>password</label>
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
				<label htmlFor='email'>email</label>
				<input
					type='text'
					id='email'
					placeholder='email'
					name='email'
					value={props.state.email}
					onChange={props.handleChange}
				/>
			</div>
			<div className='button'>
				<button type='submit' onClick={props.handleSubmit}>
					Submit
				</button>
			</div>
		</div>
	);
};

export default Form;
