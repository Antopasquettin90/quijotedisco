import { db } from './firebaseconfig';
import { collection, getDocs } from 'firebase/firestore';

export const getEntradas = async () => {
  const entradasRef = collection(db, 'entradas');
  const snapshot = await getDocs(entradasRef);
  const entradas = snapshot.docs.map((doc) => doc.data());
  return entradas;
};
