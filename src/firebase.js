// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyA3YFsy8GOXvcseM49lto-9Zl4eejPqksc",
  authDomain: "todo-react-firebase-426b4.firebaseapp.com",
  projectId: "todo-react-firebase-426b4",
  storageBucket: "todo-react-firebase-426b4.appspot.com",
  messagingSenderId: "713678796356",
  appId: "1:713678796356:web:96692bb638648ee4656e11",
  measurementId: "G-EJ3Y53P2KM"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
export {db}