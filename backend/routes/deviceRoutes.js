const express = require('express');
const router = express.Router();
const { Device, Topic, Subtopic } = require('../models/Device'); // Ajuste o caminho conforme necessário

// Rota para obter informações de um dispositivo pelo ID
router.get('/:id', async (req, res) => {
  const deviceId = parseInt(req.params.id, 10); // Converter para número
  console.log(`Requisição recebida para o dispositivo ID: ${deviceId}`);

  // Verificar se o ID é um número válido
  if (isNaN(deviceId)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  try {
    // Usar findByPk para buscar informações do dispositivo
    const device = await Device.findByPk(deviceId);

    if (device) {
      res.json(device);
    } else {
      res.status(404).json({ message: 'Dispositivo não encontrado', id: deviceId });
    }
  } catch (error) {
    console.error('Erro na consulta ao banco de dados:', error);
    return res.status(500).json({ error: 'Erro ao buscar dados' });
  }
});

// Rota para obter tópicos de um dispositivo pelo ID
router.get('/:id/topics', async (req, res) => {
  try {
    const deviceId = req.params.id;
    const topics = await Topic.findAll({
      where: { deviceId },
      include: [{ model: Subtopic }] // Inclui os subtópicos
    });
    res.json(topics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar tópicos' });
  }
});

module.exports = router;
