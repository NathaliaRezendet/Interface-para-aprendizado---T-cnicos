const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definição do modelo Device
const Device = sequelize.define('Device', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'devices',
  timestamps: true,
});

// Definição do modelo Topic
const Topic = sequelize.define('Topic', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  deviceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Device,
      key: 'id',
    },
  }
}, {
  tableName: 'topics',
  timestamps: true,
});

// Definição do modelo Subtopic
const Subtopic = sequelize.define('Subtopic', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  topicId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Topic,
      key: 'id',
    },
  }
}, {
  tableName: 'subtopics',
  timestamps: true,
});

// Estabelecer relacionamentos
Device.hasMany(Topic, { foreignKey: 'deviceId' });
Topic.belongsTo(Device, { foreignKey: 'deviceId' });
Topic.hasMany(Subtopic, { foreignKey: 'topicId' });
Subtopic.belongsTo(Topic, { foreignKey: 'topicId' });

// Sincroniza os modelos com o banco de dados (opcional)
sequelize.sync().then(() => {
  console.log('Tabelas criadas ou já existem.');
}).catch(error => {
  console.error('Erro ao criar tabelas:', error);
});

module.exports = { Device, Topic, Subtopic };
