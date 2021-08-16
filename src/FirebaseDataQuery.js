const firebase = require("firebase");
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDOFJp_NthfDRyMJQh9FidZDS7aalSVkQY",
    authDomain: "fir-sample-project-a1125.firebaseapp.com",
    projectId: "fir-sample-project-a1125",
    storageBucket: "fir-sample-project-a1125.appspot.com",
    messagingSenderId: "117634898832",
    appId: "1:117634898832:web:367f81372de851c6b33115",
    measurementId: "G-8DS86GF7XG"
});

var db = firebase.firestore();
const data ={
    first: "Fathima Sana",
    last: "Kazhutha",
    born: 2006
}

let docid= '8dSiGVLLE764CatEtVuK'

// db.collection("users").doc(docid).set(data)
// .then(() => {
//     console.log("Document written with ID", docid);


    
// })
// .catch(() => {
//     console.error("Error adding document");
// });
// var cityRef = db.collection('cities').doc('BJ');

//  cityRef.set({
//     capital: true
// },
//  { merge: true });

db.collection('users').doc(docid).delete()