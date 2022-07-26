const { Sequelize } = require("sequelize");

const db = new Sequelize(
  "mysql://root:Hf9oL7juZemZYlB5l9RC@containers-us-west-71.railway.app:7725/db_minimarket"
);

module.exports = db;
