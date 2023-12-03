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
### Aproveite o projeto!

### Informações adicionais
Se você quiser fazer um usuário com o poder de admin, cadastre um novo usuário na página /cadastro, entre na tabela usuarios do MySQL Workbench e altere o tipo de “normal” para “admin”.
Se você quiser cadastrar alguns feitiços e poções, temos alguns exemplos no arquivo poções.txt e Feitiçõs.txt na pasta raiz do projeto.

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

### Testes de Usabilidade
