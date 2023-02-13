import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB0dgS2CDclVy2zTG5Bk0o6MKS4nY9F71Y",
    authDomain: "sei-la-8076a.firebaseapp.com",
    databaseURL: "https://sei-la-8076a-default-rtdb.firebaseio.com",
    projectId: "sei-la-8076a",
    storageBucket: "sei-la-8076a.appspot.com",
    messagingSenderId: "497308222784",
    appId: "1:497308222784:web:81f55ca479ac439e1266a5"
  };
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();