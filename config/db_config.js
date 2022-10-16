const sequelize = require("sequelize");

const db = new sequelize("akuaponik", "root", "@Admin821345678",{
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

db.sync({});

module.exports = db;