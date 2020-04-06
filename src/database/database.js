const Sequelize = require('sequelize');
const sequelize = new Sequelize('filmes', 'root', '2307', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
};