const { Sequelize, sequelize } = require('../database');

const Cadastro = sequelize.define('filme', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  }
});

//sequelize.sync({force: true});

module.exports = Cadastro;