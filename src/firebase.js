//import firebase from 'firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyACu7_M9aElR0ddpsgdUFSy3lc-0FpS8ec',
  authDomain: 'netflix-clone-2d239.firebaseapp.com',
  projectId: 'netflix-clone-2d239',
  storageBucket: 'netflix-clone-2d239.appspot.com',
  messagingSenderId: '103957744518',
  appId: '1:103957744518:web:f97d401c3aaa0fe5e6ba07',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
