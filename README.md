# Microsserviços com Node.js e RabbitMQ - Ecommerce tutorial

## Serviços
### Auth Service: registro e autenticação de usuários
#### Endpoints
    - /auth/register: registro de usuários
    - /auth/login: login de usuários
#### Porta: 3000
### Products Service: registro e busca de produtos
#### Endpoints
    - /product/create: registro de produtos
    - /product/buy: adiciona produto à compra
#### Porta: 3001
### Orders Service: registro de compras de produtos
#### Endpoints
    - Não possui endpoints, apenas uma função para registrar a compra, solicitando o produto do serviço Product Service
#### Porta: 3002
## Tecnologias utilizadas
- Node.js: servidor web
- MongoDB: banco de dados
- RabbitMQ: gerenciamento de filas e mensageria entre os microsserviços

## Arquitetura do projeto
![Services Arch](./arch.png)