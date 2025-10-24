import './App.css'
import './index.css'
import { ProductoProvider } from './context/productoContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './nosotros';
import Inicio from './inicio';
import Contacto from './contacto';
import ProductoInformacion from './productoInformacion';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <ProductoProvider>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/producto' element={<ProductoInformacion />} />
      </Routes>
    </ProductoProvider>
  );
}

export default App;
