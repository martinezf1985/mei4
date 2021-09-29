import { getFirestore, collection } from 'firebase/firestore';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBNrfsF5EKs31eF2uDdcg1w7z5rusYENDY",
  authDomain: "mei-en-armonia-83398.firebaseapp.com",
  projectId: "mei-en-armonia-83398",
  storageBucket: "mei-en-armonia-83398.appspot.com",
  messagingSenderId: "962925494570",
  appId: "1:962925494570:web:63f7bc542fbb615774de53"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// getData devuelve la conexion con firestore a mi app
export const getData = () => getFirestore(app);

export const db = getFirestore()

export const productosCollection = () => collection(getData(), 'productos');
