import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrvE9_YQDhTnbz7JWt8lWuMVpzHxAviwg",
  authDomain: "disneyplus-clone-cca18.firebaseapp.com",
  projectId: "disneyplus-clone-cca18",
  storageBucket: "disneyplus-clone-cca18.appspot.com",
  messagingSenderId: "509367218199",
  appId: "1:509367218199:web:be61b113a33aa3e2a1ac52",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
