import React, { useEffect, useState } from 'react';
import './App.css';
import CustomRoutes from './Routes/CustomRoutes';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase.config';

const App = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProductos = async () => {
      setLoading(true);

      try {
        const colRef = collection(db, 'productos');
        const querySnapshot = await getDocs(colRef);

        const productosData = querySnapshot.docs.map((doc) => doc.data());
        setProductos(productosData);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
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
