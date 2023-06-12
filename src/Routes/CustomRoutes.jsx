import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from '../Context/CartContext';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Inicio from '../Pages/Inicio';
import Proximoseventos from '../Pages/Proximoseventos';
import Imagenes from '../Pages/Imagenes';
import Compratusentradas from '../Pages/Compratusentradas';
import Sobrenosotros from '../Pages/SobreNosotros';
import Contacto from '../Pages/Contacto';
import Cards from '../components/Cards/Cards';
import ItemDetailsProduct from '../components/Products/ItemDetailsProduct';
import Carrito from '../components/Cart/Carrito';
import FinalizarCompra from '../components/Forms/FinalizarCompra';

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/proximoseventos" element={<Proximoseventos />} />
          <Route path="/imagenes" element={<Imagenes />} />
          <Route path="/compratusentradas" element={<Compratusentradas />} />
          <Route path="/sobrenosotros" element={<Sobrenosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/category/:categoryId" element={<Cards />} />
          <Route path="/product/:id/details" element={<ItemDetailsProduct />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/finalizar-compra" element={<FinalizarCompra />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default CustomRoutes;
