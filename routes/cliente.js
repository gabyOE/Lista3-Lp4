// importação das biblioetas
const express = require('express');


// função para manipulação de rotas
const rotas = express.Router();


// rota get para docente
rotas.get('/', (req, res) => {
  res.send('Você está na rota get para cliente.');
});

// rota put para cliente
rotas.put('/', (req, res) => {
  res.send('Você está na rota put para cliente.');
});

// rota para o médoto post
rotas.post('/', (req, res) => {
    res.send('Você está na rota post para cliente.');
});

// rota para o médoto delete
rotas.delete('/', (req, res) => {
    res.send('Você está na rota delete para cliente.');
});

module.exports = rotas;
