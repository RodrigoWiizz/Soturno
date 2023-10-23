import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/home.jsx';
import Sobre from './pages/sobre/sobre.jsx';
import Contato from './pages/contato/contato.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/contato' element={<Contato />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);