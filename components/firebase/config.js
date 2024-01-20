import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyByzgcbU42FAm6HD4POES0Q-XAWYfFwJH0",
    authDomain: "personalweb-f71ee.firebaseapp.com",
    projectId: "personalweb-f71ee",
    storageBucket: "personalweb-f71ee.appspot.com",
    messagingSenderId: "1090919259410",
    appId: "1:1090919259410:web:cad0102849e4264ae767cb"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db}