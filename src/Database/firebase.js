import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDKGJhptmYD9kOF1f2MvtHuCxWpZhUDn0c",
    authDomain: "synhub-registration.firebaseapp.com",
    projectId: "synhub-registration",
    storageBucket: "synhub-registration.appspot.com",
    messagingSenderId: "972531828523",
    appId: "1:972531828523:web:77a714a0e8913eadf3276e",
    measurementId: "G-069ZZ1RZMR"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore();
