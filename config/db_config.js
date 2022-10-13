const sequelize = require("sequelize");

const db = new sequelize("aquaponic_db", "root", "password",{
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

db.sync({});

module.exports = db;