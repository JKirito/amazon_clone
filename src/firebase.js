import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCnUnOE0-Spj1KPs8amLJhq-TIYqHa23IM",
  authDomain: "clone-eaf25.firebaseapp.com",
  databaseURL: "https://clone-eaf25.firebaseio.com",
  projectId: "clone-eaf25",
  storageBucket: "clone-eaf25.appspot.com",
  messagingSenderId: "1097826418163",
  appId: "1:1097826418163:web:d0da102cd8ac296a53e686",
  measurementId: "G-T6TRBFH3SQ",
});

const auth = firebase.auth();

export { auth };
