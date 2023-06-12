import React, { useEffect, useState } from 'react';
import './App.css';
import CustomRoutes from './Routes/CustomRoutes';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './components/firebase/firebaseconfig';
import { getEntradas } from './components/firebase/entradas';

const App = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const entradas = await getEntradas();
        console.log(entradas);
        setProductos(entradas);
        setLoading(false);
      } catch (error) {
        console.log('Error al obtener las entradas:', error);
        setLoading(false);
      }
    };

    getProductos();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <CustomRoutes productos={productos} />
      )}
    </div>
  );
};

export default App;
