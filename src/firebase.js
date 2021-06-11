import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyDv6eEq7_aXzCkld9-Y6ZTeCHh-sPJRdAU",
    authDomain: "todoapp-80c91.firebaseapp.com",
    projectId: "todoapp-80c91",
    storageBucket: "todoapp-80c91.appspot.com",
    messagingSenderId: "116980046670",
    appId: "1:116980046670:web:57cbf64cd74710fa315c1f",
    measurementId: "G-8HCFGVTNN8"
  };

  firebase.initializeApp(config);
export default firebase;