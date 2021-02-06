import './App.css';
import Header from './components/Header/Header';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';

import { useStateValue } from './contextAPI/StateProvider';

const App = () => {
	const [{ user }] = useStateValue();
	return (
		<div className='app'>
			{!user ? (
				<Login />
			) : (
				<>
					<Header />
					<Chat />
				</>
			)}
		</div>
	);
};

export default App;
