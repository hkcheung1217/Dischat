import React from 'react';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase/firebase';

import { useStateValue } from '../../contextAPI/StateProvider';
import { actionTypes } from '../../contextAPI/reducer';

import './Login.css';

const Login = () => {
	const [{}, dispatch] = useStateValue();

	const signIn = () => {
		auth.signInWithPopup(provider)
			.then(result => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch(error => alert(error.message));
	};
	return (
		<div className='login'>
			<div className='login__container'>
				<img src='https://i.imgur.com/Ce6KFgi.png' alt='logo, icon' />

				<Button onClick={signIn}>Sign In</Button>
			</div>
		</div>
	);
};

export default Login;
