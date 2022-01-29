import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwdBv9wG2B2EDFBS7yTRoHQI1wh0BslHY",
  authDomain: "disneyplus-web-clone.firebaseapp.com",
  projectId: "disneyplus-web-clone",
  storageBucket: "disneyplus-web-clone.appspot.com",
  messagingSenderId: "904875389568",
  appId: "1:904875389568:web:f8b64a3127c1833d89ac65",
  measurementId: "G-1DNCNFYBR1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
