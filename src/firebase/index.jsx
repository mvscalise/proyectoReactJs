import firebase from 'firebase/app';
import "@firebase/firestore"


// Your web app's Firebase configuration
 // Initialize Firebase
const app = firebase.initializeApp({
    apiKey: "AIzaSyD5SZlKktay4MyMbHmrvxXP-_lJhmUAJUI",
    authDomain: "proyectoreactjs-41d1d.firebaseapp.com",
    projectId: "proyectoreactjs-41d1d",
    storageBucket: "proyectoreactjs-41d1d.appspot.com",
    messagingSenderId: "545817756689",
    appId: "1:545817756689:web:2cd85d761503feebc8ddb0"
  });
 
  
  export const getFirestore = () => {
      return firebase.firestore(app);
  }