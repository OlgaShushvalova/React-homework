import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDvhJO5MgIUX8a8Kf3Tc1QqUYX8pwRR2dM",
  authDomain: "my-reakt-app-99ee2.firebaseapp.com",
  projectId: "my-reakt-app-99ee2",
  storageBucket: "my-reakt-app-99ee2.appspot.com",
  messagingSenderId: "617704591497",
  appId: "1:617704591497:web:ce6f44d622f686e85a7658",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
