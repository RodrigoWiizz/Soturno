<div align="center">
  <img src="https://i.imgur.com/oUb55AW.png" alt="Imagem Soturno" />
</div>

# Soturno

O Soturno é um projeto desenvolvido por mim [Raguinata](https://github.com/Raguinata) e pelo meu amigo [RodrigoWiizz](https://github.com/RodrigoWiizz) para a disciplina de Desenvolvimento Web na faculdade Senac. Trata-se de um E-commerce especializado na venda de poções e feitiços.

⠀
# Tecnologias Utilizadas

  ## FrontEnd
  - <h3><img width="50" alt="Logo React" src="https://i.imgur.com/0u6L2DH.png" align="center"/> React.js</h3>

  ## BackEnd
  - <h3><img width="50" alt="Logo Node" src="https://i.imgur.com/SECFfH4.png" align="center"/> Node.js</h3>
  - <h3><img width="50" alt="Logo Express" src="https://i.imgur.com/PgDIUh2.png" align="center"/> Express.js</h3>

  ## Estilização
  - <h3><img width="50" alt="Logo Sass" src="https://i.imgur.com/H86Ucij.png" align="center"/> Sass</h3>

  ## Banco de Dados
  - <h3><img width="60" alt="Logo Sass" src="https://i.imgur.com/SZ9t17a.png" align="alt"/> MySQL</h3>
  ---
# Como Executar o Projeto

### Siga os passos abaixo:

1. Clone o repositório do GitHub:
  ```
  git clone https://github.com/SoturnoDW/Soturno.git
  ```

2. Abra o terminal dentro do Visual Studio Code e navegue até a pasta do banco de dados:
```
cd .\Soturno\DataBase\
```

3. Abra o arquivo sql.sql e copie todo o seu conteúdo.

4. Abra o MySQL Workbench e crie uma nova aba para executar a query. Cole o conteúdo do arquivo sql.sql e execute. Isso vai criar a tabela do banco de dados.

5. Feche o MySQL Workbench e volte para o Visual Studio Code. Abra o projeto e o terminal.

6. Acesse a pasta da aplicação React:
```
cd .\Soturno\Front-end\soturno\
```

7. Dentro da pasta, instale as dependências do projeto:
```
npm i
```

8. Dentro do arquivo .env da pasta front-end, faça as alterações necessárias de acordo com o seu ambiente.

9. Volte para a pasta raiz do projeto e entre na pasta backend:
```
cd .\Soturno\Back-end\
```

10. Dentro da pasta, instale as dependências do projeto:
```
npm i
```

11. Dentro do arquivo .env da pasta backend, faça as alterações necessárias de acordo com o seu ambiente.

12. Dentro da pasta backend, digite no terminal o seguinte comando para iniciar a API:
```
npm start
```

13. Verifique se a API está funcionando corretamente.

14. Volte para a pasta da aplicação React:
```
cd .\Soturno\Front-end\soturno\
```

15. Digite no terminal o seguinte comando para iniciar a aplicação:
```
npm start
```

### Informações adicionais
Se você quiser fazer um usuário com o poder de admin, cadastre um novo usuário na página /cadastro, entre na tabela usuarios do MySQL Workbench e altere o tipo de “normal” para “admin”.
Se você quiser cadastrar alguns feitiços e poções, temos alguns exemplos no arquivo poções.txt e Feitiçõs.txt na pasta raiz do projeto.

### Video Demosntrativo Ensinando a Executar o Projeto

Caso tenha ficado alguma dúvida, pode consultar este [vídeo](https://www.youtube.com/watch?v=4GoPgLAlYlE&t=928s), onde são feitos passo a passo para executar o projeto.

---

# Testes

### Testes de Usabilidade

Utilizamos a extensão [Lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=pt-BR&pli=1) nos navegadores que possuem o motor V8 (Chromium) em sua engine.
Escolhemos 3 páginas para a demosntração: Home, Login, Feitiços. Os testes serão feitos em Desktop e Celular.

⠀

1. Página Home **Desktop**

<div align="center">
  <img src="https://i.imgur.com/tCmZOTc.png" alt="Imagem Home Desktop" />
</div>

⠀

2. Página Home **Celular**

<div align="center">
  <img src="https://i.imgur.com/GtpC1y5.png" alt="Imagem Home Celular" />
</div>

⠀
3. Página Login **Desktop**

<div align="center">
  <img src="https://i.imgur.com/VScUeA0.png" alt="Imagem Login Desktop" />
</div>

⠀
4. Página Login **Celular**

<div align="center">
  <img src="https://i.imgur.com/uV3ZHWI.png" alt="Imagem Login Celular" />
</div>

⠀
5. Página Feitiços **Desktop**

<div align="center">
  <img src="https://i.imgur.com/jEfvw2k.png" alt="Imagem Feitiços Desktop" />
</div>

⠀
6. Página Feitiços **Celular**

<div align="center">
  <img src="https://i.imgur.com/D0udZAx.png" alt="Imagem Feitiços Celular" />
</div>
⠀

### Testes de Responsividade

Utilizamos a extensão [Mobile Simulator](https://chromewebstore.google.com/detail/mobile-simulator-responsi/ckejmhbmlajgoklhgbapkiccekfoccmk) nos navegadores que possuem o motor V8 (Chromium) em sua engine.
Escolhemos 3 páginas para a demosntração: Home, Login, Feitiços. Os testes serão feitos nos seguintes aparelhos iPad Air 4, iPhone 13 MAX PRO, iPhone 5, Apple Watch Serie 6.

1. Página Home

<div align="left">
  <img height="400" src="https://i.imgur.com/DqSu8fw.png" alt="Imagem Home iPad Air 4" />
  <img height="400" src="https://i.imgur.com/vbxFQef.png" alt="Imagem Home iPhone 13" />
  <img height="400" src="https://i.imgur.com/sTm6yWI.png" alt="Imagem Home iPhone 5" />
  <img height="400" src="https://i.imgur.com/32DEBbk.png" alt="Imagem Home Apple Watch" />
</div> 
⠀

2. Página Login

<div align="left">
  <img height="400" src="https://i.imgur.com/tLw0Zz3.png" alt="Imagem Login iPad Air 4" />
  <img height="400" src="https://i.imgur.com/F4LQbPB.png" alt="Imagem Login iPhone 13" />
  <img height="400" src="https://i.imgur.com/CCj34VR.png" alt="Imagem Login iPhone 5" />
  <img height="400" src="https://i.imgur.com/Z2n9JZ9.png" alt="Imagem Login Apple Watch" />
</div> 

⠀

3. Página Feitiço

<div align="left">
  <img height="400" src="https://i.imgur.com/g2v1N7Y.png" alt="Imagem Feitiço iPad Air 4" />
  <img height="400" src="https://i.imgur.com/5k87TtO.png" alt="Imagem Feitiço iPhone 13" />
  <img height="400" src="https://i.imgur.com/oWdEQMD.png" alt="Imagem Feitiço iPhone 5" />
  <img height="400" src="https://i.imgur.com/1QJgz2g.png" alt="Imagem Feitiço Apple Watch" />
</div>

---

# Problemas e Upgrades Futuros

### Problemas

* Ao logar na conta de Administrador, ele redireciona para a página de erro e deveria ser para a /admin.

### Upgrades

* Após cadastrar um novo produto, a página deve ser atualizada.
* Implementar novos métodos de autenticação e verificação.

---

# Conclusão

O projeto Soturno, concebido por [Raguinata](https://github.com/Raguinata) e [RodrigoWiizz](https://github.com/RodrigoWiizz) para a disciplina de Desenvolvimento Web no Senac, é um E-commerce especializado na comercialização de poções e feitiços. Utilizando tecnologias como React.js no FrontEnd, Node.js e Express.js no BackEnd, Sass para estilização, e MySQL como banco de dados, o Soturno oferece uma experiência única para os usuários.

Ao seguir os passos detalhados no guia de execução do projeto, é possível colocar o sistema em funcionamento. A inclusão de funcionalidades administrativas permite a criação de usuários com privilégios de administrador, proporcionando controle e gestão avançados.

Os testes realizados, tanto de usabilidade quanto de responsividade, demonstram a preocupação com a experiência do usuário em diferentes dispositivos, garantindo uma navegação fluída e agradável. A utilização de ferramentas como o Lighthouse e o Mobile Simulator fortalecem a confiabilidade e desempenho do projeto.

Entretanto, como em qualquer desenvolvimento, alguns problemas foram identificados, como o redirecionamento incorreto ao logar como administrador. Além disso, há planos para futuros upgrades, como a atualização automática da página após cadastrar um novo produto, e a implementação de novos métodos de autenticação e verificação.

Em síntese, o projeto Soturno é uma aplicação robusta e bem desenvolvida, com um design atraente e preocupação com a experiência do usuário. Com melhorias planejadas para o futuro, o Soturno promete continuar evoluindo e oferecendo uma plataforma eficiente e cativante para os amantes de poções e feitiços.

### Aproveite o projeto!


