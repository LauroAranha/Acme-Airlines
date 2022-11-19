import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDoc, getDocs } from 'firebase/firestore';

import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
//adicione aqui
};

//inicializamos o firebase com as configurações 
const app = initializeApp(firebaseConfig);

export const storage = getStorage()
export const auth = getAuth()
export const db = getFirestore();