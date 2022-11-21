/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  getDocs,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC0z5g2bVWzyzvwdBDQb7V4Iy1rB2R90-o',
  authDomain: 'acme-airlines.firebaseapp.com',
  projectId: 'acme-airlines',
  storageBucket: 'acme-airlines.appspot.com',
  messagingSenderId: '583942664111',
  appId: '1:583942664111:web:56bcd4cb940083ef26c95a',
  measurementId: 'G-3FH2PX88ZF',
};

// Inicializamos o firebase com as configurações
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
