import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA1oZ6goR0ZWl2H6PHqTxDoNlk7mfzgNxQ",
    authDomain: "tesla-clone-b8b88.firebaseapp.com",
    projectId: "tesla-clone-b8b88",
    storageBucket: "tesla-clone-b8b88.appspot.com",
    messagingSenderId: "62816999472",
    appId: "1:62816999472:web:995f6e36d5360adf68f5f5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }