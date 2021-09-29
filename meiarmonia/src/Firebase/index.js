import { getFirestore, collection } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBZuTVzIGByQMzlftakShNfeATGNazc7dw",
//   authDomain: "tcaerjs-c6a2f.firebaseapp.com",
//   projectId: "tcaerjs-c6a2f",
//   storageBucket: "tcaerjs-c6a2f.appspot.com",
//   messagingSenderId: "1025191596029",
//   appId: "1:1025191596029:web:2778c6244ea0a5f29fd394"
// };
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
