import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCa8h-HYvSWMDzgz2sM7iulqCyzLrDLcL4",
  authDomain: "react-burger-app-1bbaf.firebaseapp.com",
  databaseURL: "https://react-burger-app-1bbaf.firebaseio.com",
  projectId: "react-burger-app-1bbaf",
  storageBucket: "react-burger-app-1bbaf.appspot.com",
  messagingSenderId: "131739842796",
  appId: "1:131739842796:web:6d440de56e6714fa9c0dc9"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
