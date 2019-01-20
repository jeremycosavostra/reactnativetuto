import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBqK8g2aEbxIse48LkqmqhVFfFRwBCkBA4",
    authDomain: "react-133c4.firebaseapp.com",
    databaseURL: "https://react-133c4.firebaseio.com",
    projectId: "react-133c4",
    storageBucket: "react-133c4.appspot.com",
    messagingSenderId: "182365762597"
};


firebase.initializeApp(config);
firebase.firestore();

export default firebase;
