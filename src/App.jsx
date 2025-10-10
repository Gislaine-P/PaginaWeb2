import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nosotros from './nosotros'
import Inicio from './inicio'
import Contacto from './contacto'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App(){
  return(
      <>
        <Routes>
          <Route path='/' element={ <Inicio/>} />
          <Route path='/nosotros' element={ <Nosotros/> } />
          <Route path='/contacto' element={ <Contacto/> } />
        </Routes>
      </>
  )
}

export default App
