import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmtnTTaq4DmK-5EhxPwk1YewQlL_zj7dk",
  authDomain: "resume-builder-d3743.firebaseapp.com",
  projectId: "resume-builder-d3743",
  storageBucket: "resume-builder-d3743.appspot.com",
  messagingSenderId: "707240141174",
  appId: "1:707240141174:web:b9c24eba18aff5e2e6da57",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export default firebase;
