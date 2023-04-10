// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8XLVPspjNKsye5wr-uanxujQqVyqwUmo",
  authDomain: "flying-factories.firebaseapp.com",
  projectId: "flying-factories",
  storageBucket: "flying-factories.appspot.com",
  messagingSenderId: "662639877660",
  appId: "1:662639877660:web:49f5c2fcf462023288c9d9",
  measurementId: "G-45LQXE6RL9"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };