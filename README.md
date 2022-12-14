
<details>
  <summary><strong>English Readme</strong></summary>
  <br/>

# Project Store Manager

## Summary

* [Context](#context)
* [Getting Started](#getting-started)
* [Prerequisites](#installing)
* [Installing](#installing)
* [Running with Docker](#running-with-docker)
* [Running the tests](#running-the-tests)
* [Technologies used](#technologies-used)

## Context

A RESTful API that manages a store's sales and products, giving more practicality and organization to the entire store management. The user can register, read, update and delete the registration of products and sales, and all these operations rely on data validation to avoid registration errors.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Please pay attention to the prerequisites.

### Prerequisites

To run this project you will need to have installed on your machine:

* [Node.js](https://nodejs.org/en/)
* [MySQL](https://www.mysql.com/)
* [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) (optional)

 MySQL Workbench is optional, but it is recommended to use it to manage the database with a visual interface.

### Installing

First of all, after cloning the repository, you will need to install the dependencies:

```
cd store-manager && npm install
```

To run the project without Docker, you will need to create a `.env` file in the root of the project and fill it with the following information:

```
MYSQL_HOST=name_of_your_mysql_host
MYSQL_USER=name_of_your_mysql_user
MYSQL_PASSWORD=your_mysql_password
MYSQL_DATABASE=StoreManager
PORT=3000
```

In the HOST, USER and PASSWORD fields, you must enter the information of your MySQL database. If you are using MySQL Workbench, you can find this information in the MySQL Connections tab.

## Running with Docker

To run the project with Docker, you will need to have Docker installed on your machine. After that, you will need to run the following commands:

```
cd store-manager
docker-compose up -d
docker exec -it store_manager bash
npm install
npm run debug
```

ps.: In this project the docker and Eslint configuration was developed by [Trybe's](https://www.betrybe.com/) team.

## Running the tests

To run the tests, you must run the following command:

```
rpm run test:mocha
```

And to run coding style run:

```
npm run lint
```

## Technologies used

* [Node.js](https://nodejs.org/en/) - JavaScript runtime
* [Express](https://expressjs.com/) - Web framework for Node.js
* [MySQL](https://www.mysql.com/) - Database
* [Mocha](https://mochajs.org/) - Test framework
* [Chai](https://www.chaijs.com/) - Assertion library
* [Sinon](https://sinonjs.org/) - Test spies, stubs and mocks

<br/>
</details>
<br/>


# Projeto Store Manager

## Sum??rio

* [Contexto](#contexto)
* [Configura????es Iniciais](#configura????es-iniciais)
* [Pr??-requisitos](#pre-requisitos)
* [Instalando](#instalando)
* [Executando com Docker](#Executando-com-docker)
* [Executando os testes](#executando-os-testes)
* [Tecnologias usadas](#technologies-used)

## Contexto

Uma API RESTful que gerencia as vendas e produtos de uma loja, conferindo mais praticidade e organiza????o para a gest??o. O usu??rio pode cadastrar, ler, atualizar e excluir o registro de produtos e vendas, e todas essas opera????es contam com valida????o de dados para evitar erros de registros.

## Configura????es Iniciais

Essas instru????es fornecer??o a voc?? uma c??pia do projeto em sua m??quina local para fins de desenvolvimento e teste. Fique atento aos pr??-requisitos.

### Pr??-requisitos

Para executar este projeto voc?? precisar?? ter instalado em sua m??quina:

* [Node.js](https://nodejs.org/en/)
* [MySQL](https://www.mysql.com/)
* [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) (opcional)

 MySQL Workbench ?? opcional, mas ?? recomendado para gerenciar o banco de dados atrav??s de uma interface visual.

### Instalando

Antes de tudo, ap??s clonar o reposit??rio, voc?? precisar?? instalar as depend??ncias:

```
cd store-manager && npm install
```

Para executar o projeto sem o Docker, voc?? precisar?? criar um arquivo `.env` na raiz do projeto e preench??-lo com as seguintes informa????es:

```
MYSQL_HOST=name_of_your_mysql_host
MYSQL_USER=name_of_your_mysql_user
MYSQL_PASSWORD=your_mysql_password
MYSQL_DATABASE=StoreManager
PORT=3000
```

Nos campos HOST, USER e PASSWORD, voc?? deve inserir as informa????es do seu banco de dados MySQL. Se voc?? estiver usando o MySQL Workbench, poder?? encontrar essas informa????es na guia MySQL Connections.

## Executando com o Docker

Para executar o projeto com o Docker, voc?? precisar?? ter o Docker instalado em sua m??quina. Depois disso, voc?? precisar?? executar os seguintes comandos:

```
cd store-manager
docker-compose up -d
docker exec -it store_manager bash
npm install
npm run debug
```

ps.: Neste projeto a configura????o do docker e do Eslint foi desenvolvida pela equipe da [Trybe](https://www.betrybe.com/).

## Executando os testes

Para executar os testes, voc?? deve executar o seguinte comando:

```
rpm run test:mocha
```

E para executar os testes de estilo do c??digo, execute:


```
npm run lint
```

## Tecnologias usadas

* [Node.js](https://nodejs.org/en/) - Runtime de Javascript
* [Express](https://expressjs.com/) - Framework Web para Node.js
* [MySQL](https://www.mysql.com/) - Banco de dados
* [Mocha](https://mochajs.org/) - Framework de testes
* [Chai](https://www.chaijs.com/) - Biblioteca de asserss??es
* [Sinon](https://sinonjs.org/) - Spys, stubs e mocks
