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
import Produtos from './pages/produtos/produtos';
import Admin from './pages/admin/admin';
import Consulta from './pages/consulta/consulta';
import Gerenciamento from './pages/gerenciamento/gerenciamento';
import CadastroPocao from './pages/cadastro-pocao/cadastro-pocao';

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
        <Route path='/pocoes' element={<Pocao />} />
        <Route path='/cadastro' element={<Cadastrar />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/consulta' element={<Consulta />} />
        <Route path='/gerenciamento' element={<Gerenciamento />} />
        <Route path='/cadastro-pocao' element={<CadastroPocao />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);