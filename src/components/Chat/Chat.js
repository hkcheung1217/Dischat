import React, { useState, useRef, useEffect } from 'react';
import { useStateValue } from '../../contextAPI/StateProvider';

import './Chat.css';

import { Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import db from '../../firebase/firebase';
import firebase from 'firebase';
import Message from './../Message/Message';

const Chat = () => {
	const dummy = useRef();
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState([]);
	const [{ user }] = useStateValue();

	useEffect(() => {
		db.collection('messages')
			.orderBy('timestamp')
			.onSnapshot(snapshot => setMessages(snapshot.docs.map(doc => doc.data())));
	}, []);

	const scrollToBtm = () => {
		dummy.current.scrollIntoView({ behavior: 'smooth' });
	};

	const sendMessage = async e => {
		e.preventDefault();

		if (input.trim() !== '') {
			await db.collection('messages').add({
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				message: input,
				user: user.displayName,
				photo: user.photoURL,
			});
			setInput('');
			scrollToBtm();
		}
	};

	return (
		<div className='chat'>
			<div className='chat__container'>
				{messages.map((message, index) => (
					<Message
						key={index}
						timestamp={message.timestamp}
						message={message.message}
						user={message.user}
						photo={message.photo}
					/>
				))}

				<span ref={dummy}></span>
			</div>
			<div className='chat__input'>
				<Button>
					<AddCircleIcon fontSize='large' />
				</Button>
				<form onSubmit={sendMessage}>
					<input onClick={scrollToBtm} onChange={e => setInput(e.target.value)} value={input} />
					<button className='chat__inputButton' type='submit'>
						Send Message
					</button>
				</form>

				<div className='chat__inputIcons'>
					<Button>
						<EmojiEmotionsIcon fontSize='large' />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Chat;
