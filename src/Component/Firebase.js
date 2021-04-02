import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3XUmX8KSCQTebD52bJ-XJJ9kXti1ZtBU",
  authDomain: "netflix-clone-3ed5c.firebaseapp.com",
  projectId: "netflix-clone-3ed5c",
  storageBucket: "netflix-clone-3ed5c.appspot.com",
  messagingSenderId: "899053834009",
  appId: "1:899053834009:web:5120bd4681e2b6ea667f88",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
