import firebase from 'firebase/app'
import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOFJp_NthfDRyMJQh9FidZDS7aalSVkQY",
    authDomain: "fir-sample-project-a1125.firebaseapp.com",
    projectId: "fir-sample-project-a1125",
    storageBucket: "fir-sample-project-a1125.appspot.com",
    messagingSenderId: "117634898832",
    appId: "1:117634898832:web:367f81372de851c6b33115",
    measurementId: "G-8DS86GF7XG"
  };

const Firebase = firebase.initializeApp(firebaseConfig);
const db=Firebase.firestore();
export default db;
