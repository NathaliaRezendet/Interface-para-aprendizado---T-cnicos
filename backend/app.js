const express = require('express');
const deviceRoutes = require('./routes/deviceRoutes'); // Importe suas rotas aqui
const cors = require('cors'); // Importando o CORS

const app = express();

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Middleware para habilitar CORS
app.use(cors());

// Rota básica para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor está funcionando!');
});

// Use as rotas relacionadas a devices na rota base /api/device
app.use('/api/device', deviceRoutes);

// Middleware para rotas não encontradas
app.use((req, res) => {
  res.status(404).json({ message: 'Rota não encontrada' });
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Erro interno no servidor' });
});

// Configuração da porta
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
