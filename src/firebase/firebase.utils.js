import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCMKxvhPI8CVDNIT0oRpasOVOErEYGgGOE",
    authDomain: "crwn-db-c2b29.firebaseapp.com",
    projectId: "crwn-db-c2b29",
    storageBucket: "crwn-db-c2b29.appspot.com",
    messagingSenderId: "805697737508",
    appId: "1:805697737508:web:c51162f06e680e752719b1",
    measurementId: "G-K0W8QH62G6"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ propmt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
