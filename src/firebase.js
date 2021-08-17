import firebase from "firebase/app";
import "firebase/auth";
//authenication configuration
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCZ2msa9YjDp96QPVGr8AF9BxKEB2R5ObA",
    authDomain: "talkey-53296.firebaseapp.com",
    projectId: "talkey-53296",
    storageBucket: "talkey-53296.appspot.com",
    messagingSenderId: "736137946075",
    appId: "1:736137946075:web:650dd72b6dda4f69bb7dfe",
  })
  .auth();
