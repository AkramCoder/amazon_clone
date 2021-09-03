import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA8i-PrLteLBrSUz2Q4JOsEW8Ef0mEJgGc",
  authDomain: "clone-6c675.firebaseapp.com",
  projectId: "clone-6c675",
  storageBucket: "clone-6c675.appspot.com",
  messagingSenderId: "728276702198",
  appId: "1:728276702198:web:8e739cc9b5d27a94446dd7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app);


export { db, auth }