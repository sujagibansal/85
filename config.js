import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBbDggWOOo6NLPjWoFAV9a1JlaQ06_LjuM",
  authDomain: "book-santa-b02d5.firebaseapp.com",
  projectId: "book-santa-b02d5",
  storageBucket: "book-santa-b02d5.appspot.com",
  messagingSenderId: "419729947533",
  appId: "1:419729947533:web:4c766ba8e903b0cc3a1bc4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
