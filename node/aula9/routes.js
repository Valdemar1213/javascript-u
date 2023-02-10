const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController.js')

// Rotas da HOME
route.get("/", homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de CONTATO
route.get('/contato', contatoController.paginaInicial)



module.exports = route;
