const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_schema','root','kbicky',{
    dialect: 'mysql',
    host: 'localhost'
});
module.exports = sequelize;