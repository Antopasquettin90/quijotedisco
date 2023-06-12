import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC6u0_zoRV78DgA5MYJW_dl0lAHjnvhTRM",
  authDomain: "quijotedisco-9fbf6.firebaseapp.com",
  projectId: "quijotedisco-9fbf6",
  storageBucket: "quijotedisco-9fbf6.appspot.com",
  messagingSenderId: "1077980218435",
  appId: "1:1077980218435:web:4dac0a79bc25817833c0f6",
  measurementId: "G-H7RM2FBB7L"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };