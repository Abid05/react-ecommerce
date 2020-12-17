 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';


 const config =  {
    apiKey: "AIzaSyC0eIBaFum-gZBoVO0SzWCZDJWB9JfEBbM",
    authDomain: "crown-db-a759b.firebaseapp.com",
    projectId: "crown-db-a759b",
    storageBucket: "crown-db-a759b.appspot.com",
    messagingSenderId: "1056248545152",
    appId: "1:1056248545152:web:80d5270019fd64da2f0b65",
    measurementId: "G-XQWR7VS4WG"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider(); 
  provider.setCustomParameters({prompt: "select_account"});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase; 
