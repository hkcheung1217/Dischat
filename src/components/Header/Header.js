import React from 'react';
import './Header.css';

import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import { Button } from '@material-ui/core';
import { useStateValue } from '../../contextAPI/StateProvider';

const Header = () => {
	const [{ user }] = useStateValue();

	return (
		<div className='header'>
			<div className='header__left'>
				<h3>Welcome, {user?.displayName.split(' ')[0] || user?.email.split('@')[0] || 'guest'}!</h3>
			</div>
			<div className='header__right'>
				<Button>
					<NotificationsIcon />
				</Button>
				<Button>
					<EditLocationIcon />
				</Button>
				<Button>
					<PeopleAltIcon />
				</Button>
			</div>
		</div>
	);
};

export default Header;
