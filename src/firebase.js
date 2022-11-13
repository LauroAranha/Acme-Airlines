import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDoc, getDocs } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
//adicione aqui
};

//inicializamos o firebase com as configurações 
const app = initializeApp(firebaseConfig);

export const db = getFirestore();