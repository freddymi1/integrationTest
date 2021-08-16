import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDhgb5xP9MrsoZSJ55iTeruqX0GSGFHeAw",
    authDomain: "reactapp-7f023.firebaseapp.com",
    projectId: "reactapp-7f023",
    storageBucket: "reactapp-7f023.appspot.com",
    messagingSenderId: "11120850302",
    appId: "1:11120850302:web:5af23ae905043e73e1af2f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
export default db;