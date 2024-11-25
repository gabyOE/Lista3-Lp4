
// importação da biblioteca Express
const express = require('express')

// criação de um app Express
const app = express();

// importação das rotas
const clienteRotas = require('./routes/cliente');
const veiculoRotas = require('./routes/veiculo');

// definição de parâmetros do servidor
const hostname = '127.0.0.1';
const port = 8080;

app.get('/', (req, res) => {
  res.send('Esta é a raiz do servidor.')
})

// utilizar as rotas
app.use('/cliente', clienteRotas);
app.use('/veiculo', veiculoRotas);


// rodar a aplicação
app.listen(port, hostname, console.log('O servidor está rodando'));
