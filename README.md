# jsonserver-hello-world
Projeto de exemplo para iniciar uma api mocada com jsonserver


## Ambiente Dev:
Para rodar este projeto na sua máquina local (localhost), siga os seguintes passos: 

1. Faça o fork deste projeto
2. Faça o clone do projeto em uma pasta na sua máquina
3. Abra a pasta criada
4. Instalar o node e o npm (se necessário)
5. Faça a instalação das dependencias: 
```npm install```
6. Inicie o projeto
```npm start```
7. Para testar, abra o endereço [http://localhost:3000/](http://localhost:3000/) no navegador:
8. Para fazer um GET em um resorce, faça /nome-do-resource, exemplo [http://localhost:3000/livros](http://localhost:3000/livros)


## Hospedagem:
Para hospedar este projeto no render, siga os seguintes passos: 

1. Faça o fork deste projeto no github (GH)
2. Deixe o projeto como público no seu GH
3. Crie uma conta no Render
4. Conecte o render com o seu GH para que consiga fazer deploy do seu projeto diretamente do GH
5. Crie um novo "Webservice" no render: New > Webservice
6. Em "Source Code", clique em "Public Git Repository" e informe a URL do seu repositorio, exemplo: "https://github.com/wcipriano/jsonserver-hello-world"
7. Clique em connect
8. Confira os dados do seu projeto:
  * Language: Node
  * Branch: main
  * Build Command: npm install
  * Start Command: node index.js
  * Instance Type: Free
9. Clique em "Deploy web service"
10. Aguarde o processo de deploy 
11. Depois de finalizado o processo (em média 5min), utilize a url que fica abaixo do nome do seu projeto para testar, exemplo:
[https://jsonserver-hello-world.onrender.com](https://jsonserver-hello-world.onrender.com)


