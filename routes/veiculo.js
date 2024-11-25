// importação das biblioetas
const express = require('express');

// função para manipulação de rotas
const rotas2 = express.Router();


// rota get para veiculo
rotas2.get('/', (req, res) => {
  res.send('Você está na rota get para veiculo.');
});

// rota put para veiculo
rotas2.put('/', (req, res) => {
  res.send('Você está na rota put para veiculo.');
});

// rota post para veiculo
rotas2.post('/', (req, res) => {
  res.send('Você está na rota post para veiculo.');
});

// rota delete para veiculo
rotas2.delete('/', (req, res) => {
  res.send('Você está na rota delete para veiculo.');
});

// exportar o código que manipula a rota para veiculo
module.exports = rotas2;
