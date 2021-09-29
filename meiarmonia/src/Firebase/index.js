

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBNrfsF5EKs31eF2uDdcg1w7z5rusYENDY",
  authDomain: "mei-en-armonia-83398.firebaseapp.com",
  projectId: "mei-en-armonia-83398",
  storageBucket: "mei-en-armonia-83398.appspot.com",
  messagingSenderId: "962925494570",
  appId: "1:962925494570:web:63f7bc542fbb615774de53"
};
  
  const app = initializeApp(firebaseConfig);


export const getData = () => getFirestore(app);

 