import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';


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
import Produtos from './pages/produtos/produtos';
import CadastroFeitico from './pages/cadastro-feitico/cadastro-feitico';
import CadastroPocao from './pages/cadastro-pocao/cadastro-pocao';
import Listagem from './pages/listagem/listagem.jsx';
import AlterarPocao from './pages/alterar-pocao/alterarPocao.jsx';
import AlterarFeitico from './pages/alterar-feitico/alterarFeitico.jsx';
import Erro from './pages/erro/erro.jsx';
import Deletar from './pages/excluir/deletar.jsx';
import AuthProvider from './pages/context/AuthContext.jsx';
import ProdutosAdmin from './pages/produtos-admin/produtosAdmin.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/login' element={<Login />} />
          <Route path='/feiticos' element={<Feitico />} />
          <Route path='/compra-feitico' element={<CompraFeitico />} />
          <Route path='/pocoes' element={<Pocao />} />
          <Route path='/cadastro' element={<Cadastrar />} />
          <Route path='/produtos' element={<Produtos />} />
          <Route path='/produtos-admin' element={<ProdutosAdmin />} />
          <Route path='/gerenciamento' element={<Gerenciamento />} />
          <Route path='/compra-pocao' element={<CompraPocao />} />
          <Route path='/cadastro-feitico' element={<CadastroFeitico />} />
          <Route path='/cadastro-poção' element={<CadastroPocao />} />
          <Route path='/alterar-feitico' element={<AlterarFeitico />} />
          <Route path='/listagem' element={<Listagem />} />
          <Route path='/alterar-pocao' element={<AlterarPocao />} />
          <Route path='/*' element={<Erro />} />
          <Route path='/deletar' element={<Deletar />} />
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);