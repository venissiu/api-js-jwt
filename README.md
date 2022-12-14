# Blogs API

Neste projeto foi implementado uma API com o intuito de gerênciar um blog genérico, seus posts e usuários.

# Tecnologias utilizadas

    Node, Express, Sequelize, MYSQL, JOI, JWT

Para entender melhor o que cada rota faz e do que precisa ser passado em cada uma delas, recomendo a leitura da documentação que fiz no [Postman](https://documenter.getpostman.com/view/22570620/2s8YmGTkic)



# Pré-requisitos

Se faz necessário o node instalado caso decida rodar localmente

Modificação do arquivo .env.example para .env e adição das suas variáveis para configuração do ambiente

# Instalação
### Como rodar na sua máquina 

<details>
<summary>Local</strong></summary>
 
Clone o projeto 
 ``` 
 git clone git@github.com:venissiu/api-js-jwt.git
 ```
Entre na pasta do projeto 
 ```
cd /api-js-jwt
 ```
Para instalar as dependências use 
 ```
 npm install
 ```
Em seguida para estruturação do banco e povoamento do mesmo
 ```
 npm run prestart
 ```
 ```
 npm run seed
 ``` 
Com o banco montado e sincronizado, você pode optar por rodar com o 
 ```
 npm start
 ``` 
Para levantar o servidor com nodemon
 ```
 npm run debug
 ``` 
</details>
  
<details>
<summary>Docker</strong></summary>

DockerFile e Docker-Compose fornecidos pela Trybe, apenas algumas alterações minhas.


Clone o projeto 
```
git clone git@github.com:venissiu/api-js-jwt.git
```
Entre na pasta do projeto 
```
cd /api-js-jwt
```
Rode o docker compose 
```
docker-compose up
```
Entre no container node 
```
docker exec -it personal-api bash
```
No container, rode o 
```
npm install
```
Em seguida para estruturação do banco e povoamento do mesmo
```
npm run prestart
```
```
npm run seed
``` 

Com o banco montado e sincronizado, você pode inicializar o projeto
```
npm start
``` 
Para levantar o servidor com nodemon
```
npm run debug
``` 

</details

