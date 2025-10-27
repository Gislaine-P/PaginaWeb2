import './App.css'
import './index.css'
import { ProductoProvider } from './context/productoContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './paginas/nosotros';
import Inicio from './paginas/inicio';
import Contacto from './paginas/contacto';
import ProductoInformacion from './paginas/productoInformacion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Carrito from './paginas/carrito';
import Login from './paginas/Login';
import { Perfil } from './paginas/Perfil';
import { Registro } from './paginas/Registro';
import Dashboard from './paginas/Dashboard'
import Agregarusu from './paginas/Agregarusu';
import Editareliminarusu from './paginas/Editareliminarusu';
import Agregarproducto from './paginas/Agregarproducto';
import EditarEliminarProducto from './paginas/Editareliminarproducto';

function App() {
  return (
    <ProductoProvider>
      <Routes>
        <Route path ='/login' element={<Login />}/>
        <Route path='/perfil' element={<Perfil/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/dashboard'element={<Dashboard/>}/>
          <Route path='/' element={<Inicio />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/producto' element={<ProductoInformacion />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/agregarusuario' element={<Agregarusu />} />
        <Route path='/editarusuario' element={<Editareliminarusu />} />
        <Route path='/agregarproducto' element={<Agregarproducto />} />
        <Route path='/editareliminarproducto' element={<EditarEliminarProducto />} />
      </Routes>
    </ProductoProvider>
  );
}

export default App;
