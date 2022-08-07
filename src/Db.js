import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBhOhzK5Eu4CJITYTzoWvklXbpCnWvEL-Q",
  authDomain: "loja-549e1.firebaseapp.com",
  projectId: "loja-549e1",
  storageBucket: "loja-549e1.appspot.com",
  messagingSenderId: "641344127151",
  appId: "1:641344127151:web:bc5d99a6c79fc1cf9fd45a",
  measurementId: "G-6HWRF8JRKB"
};



const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
export {db, firebaseApp} 


