import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Carrusel from './Componente/Carusel';
import Fotos from './Componente/Fotos';
import Imagenes from './Componente/Imagenes';
import Mio from './Componente/Mio';
import NavBar from './Componente/NavBar';
import Tablas from './Componente/Tablas';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav className='App-navBar'>
      <NavBar />
      </nav>
      <br/>
      <div className='App-carrusel'>
      <Carrusel />
      </div>
      <br/>
      <div className='App-imagenes'>
      <Imagenes />
      </div>
      <br/>
      <div className='App-tablas'>
      <Tablas />
       </div>
       <br/>
       <div className='App-fotos'>
       <Fotos  />
       </div>
       <Mio />
       
      </header>
    </div>
  );
}

export default App;
