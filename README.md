<div align="center">
  <img src="https://i.imgur.com/oUb55AW.png" alt="Imagem Soturno" />
</div>

# Soturno

O Soturno é um projeto desenvolvido por mim [Raguinata](https://github.com/Raguinata) e pelo meu amigo [RodrigoWiizz](https://github.com/RodrigoWiizz) para a disciplina de Desenvolvimento Web na faculdade Senac. Trata-se de um E-commerce especializado na venda de poções e feitiços.

⠀
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
⠀
⠀
# Como Executar o Projeto

### Siga os passos abaixo:

1. Clone o repositório do GitHub:
```
git clone https://github.com/SoturnoDW/Soturno.git
```

Abra o terminal dentro do Visual Studio Code e navegue até a pasta do banco de dados:
cd .\Soturno\DataBase\

Abra o arquivo sql.sql e copie todo o seu conteúdo.

Abra o MySQL Workbench e crie uma nova aba para executar a query. Cole o conteúdo do arquivo sql.sql e execute. Isso vai criar a tabela do banco de dados.

Feche o MySQL Workbench e volte para o Visual Studio Code. Abra o projeto e o terminal.

Acesse a pasta da aplicação React:

cd .\Soturno\Front-end\soturno\

Dentro da pasta, instale as dependências do projeto:
npm i

Dentro do arquivo .env da pasta front-end, faça as alterações necessárias de acordo com o seu ambiente.

Volte para a pasta raiz do projeto e entre na pasta backend:

cd .\Soturno\Back-end\

Dentro da pasta, instale as dependências do projeto:
npm i

Dentro do arquivo .env da pasta backend, faça as alterações necessárias de acordo com o seu ambiente.

Dentro da pasta backend, digite no terminal o seguinte comando para iniciar a API:

npm start

Verifique se a API está funcionando corretamente.

Volte para a pasta da aplicação React:

cd .\Soturno\Front-end\soturno\

Digite no terminal o seguinte comando para iniciar a aplicação:
npm start

Aproveite o projeto!
Informações adicionais
Se você quiser fazer um usuário com o poder de admin, cadastre um novo usuário na página /cadastro, entre na tabela usuarios do MySQL Workbench e altere o tipo de “normal” para “admin”.
Se você quiser cadastrar alguns feitiços e poções, temos alguns exemplos no arquivo poções.txt e Feitiçõs.txt na pasta raiz do projeto.

