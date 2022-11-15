O que foi desenvolvido

Neste projeto foi implementado uma API com o intuito de gerênciar um blog genérico, seus posts e usuários.

Tecnologias utilizadas

    Node, Express, Sequelize, MYSQL, JOI, JWT

Documentação feita no postman

https://documenter.getpostman.com/view/22570620/2s8YmGTkic

Como rodar na sua máquina(local)  

    Configure o arquivo .env.example para .env e adicione suas variáveis para configuração do ambiente
    Clone o projeto "git clone git@github.com:NiiVx/api-js-jwt.git"
    Entre na pasta do projeto cd /api-js-jwt
    Rode npm install para instalar as dependências
    Rode o "npm install", em seguida "npm run prestart" e "npm run seed", para estruturação do banco e povoamento do mesmo
    Com o banco montado e sincronizado, você pode optar por rodar com o "npm start" ou "npm run debug" para levantar o servidor com nodemon. 

 
Como rodar na sua máquina(docker)  

    DockerFile e Docker-Compose fornecidos pela Trybe, apenas algumas alterações minhas.
    Clone o projeto "git clone git@github.com:NiiVx/api-js-jwt.git"
    Entre na pasta do projeto cd /api-js-jwt
    Rode o docker compose "docker-compose up"
    Entre no container node, caso não tenha alterado nomes, estará "personal-api"
    No container node, rode o "npm install", em seguida "npm run prestart" e depois "npm run seed", para estruturação do banco e povoamento do mesmo
    Com o banco montado e sincronizado, você pode optar por rodar com o "npm start" ou "npm run debug" para levantar o servidor com nodemon. 




