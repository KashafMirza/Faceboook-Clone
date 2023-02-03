import "firebase/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOys8-0yaKU80vvvLY86rUtdhSGGSg3dU",
    authDomain: "facebook-clone-1c0c9.firebaseapp.com",
    projectId: "facebook-clone-1c0c9",
    storageBucket: "facebook-clone-1c0c9.appspot.com",
    messagingSenderId: "569815533765",
    appId: "1:569815533765:web:e7c6596fa85a78af45c8ac",
    measurementId: "G-RN05TZ1ZGD"
  };
 //line of connection of our front end to firebase backend
 
  
  
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();
 
 
 export { auth, provider };
 export default db;