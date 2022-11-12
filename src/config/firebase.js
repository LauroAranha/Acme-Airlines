import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
//INSERIR AQUELES DADOS QUE O LAURO MANDOU.
};

//inicializamos o firebase com as configurações 
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);