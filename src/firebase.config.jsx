// Importa las funciones que necesitas de los SDK que necesitas
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Agrega esta línea para importar Firestore

// Tu configuración de Firebase para la aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyC6u0_zoRV78DgA5MYJW_dl0lAHjnvhTRM",
  authDomain: "quijotedisco-9fbf6.firebaseapp.com",
  projectId: "quijotedisco-9fbf6",
  storageBucket: "quijotedisco-9fbf6.appspot.com",
  messagingSenderId: "1077980218435",
  appId: "1:1077980218435:web:4dac0a79bc25817833c0f6",
  measurementId: "G-H7RM2FBB7L"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Agrega esta línea para obtener una instancia de Firestore

export { app, analytics, db }; // Exporta los servicios que desees utilizar en tu aplicación
