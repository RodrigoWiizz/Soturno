import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/home.jsx';
import Sobre from './pages/sobre/sobre.jsx';
import Contato from './pages/contato/contato.jsx';
import Login from './pages/login/login.jsx';
import Feitico from './pages/feitico/feitico.jsx';
import CompraFeitico from './pages/compra-feitico/compra-feitico';
import Pocao from './pages/pocao/pocao';
import Cadastrar from './pages/cadastro/cadastro';
import Admin from './pages/admin/admin';
import Gerenciamento from './pages/gerenciamento/gerenciamento';
import CompraPocao from './pages/compra-pocao/compra-pocao';
import Consulta from './pages/consulta/consulta';
import Produtos from './pages/produtos/produtos';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/login' element={<Login />} />
        <Route path='/feiticos' element={<Feitico />} />
        <Route path='/compra-feitiço' element={<CompraFeitico />} />
        <Route path='/poções' element={<Pocao />} />
        <Route path='/cadastro' element={<Cadastrar/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/gerenciamento' element={<Gerenciamento/>} />
        <Route path='/compra-poção' element={<CompraPocao/>} />
        <Route path='/consulta' element={<Consulta/>} />
        <Route path='/produtos' element={<Produtos/>} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);