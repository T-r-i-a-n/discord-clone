import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDyV49_5VQ0GeILxxfbxXwKed0P2_6e8b0",
    authDomain: "discord-clone-fd00b.firebaseapp.com",
    projectId: "discord-clone-fd00b",
    storageBucket: "discord-clone-fd00b.appspot.com",
    messagingSenderId: "432194726104",
    appId: "1:432194726104:web:96862f55740dd6885c8fad",
    measurementId: "G-1MFM17B6XW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;