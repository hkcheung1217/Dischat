import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDQlOSAaBXDuwyJhPSnmki16sAMmxalhK0',
	authDomain: 'chatroom-fbdf5.firebaseapp.com',
	projectId: 'chatroom-fbdf5',
	storageBucket: 'chatroom-fbdf5.appspot.com',
	messagingSenderId: '666430574871',
	appId: '1:666430574871:web:ed41b3ac01c6119c35a752',
	measurementId: 'G-QHEFY82NW3',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
