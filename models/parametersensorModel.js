const Sequelize = require("sequelize");
const db = require("../config/db_config");

const ParameterSensor = db.define(
    "parameter_sensor",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            },
        ph_min: {type: Sequelize.DECIMAL(5,2)},
        ph_max: {type: Sequelize.DECIMAL(5,2)},
        suhu_min: {type: Sequelize.DECIMAL(5,2)},
        suhu_max: {type: Sequelize.DECIMAL(5,2)},
    },
    {
        freezeTableName : true,
        timestamps: false,
    }
);

module.exports = ParameterSensor;

// CREATE TABLE parameter_sensor (
//     id int NOT NULL AUTO_INCREMENT,
//     ph_min DECIMAL(5,2),
//     ph_max DECIMAL(5,2),
//     suhu_min DECIMAL(5,2),
//     suhu_max DECIMAL(5,2),
//     PRIMARY KEY (id)
//  );

// insert into parameter_sensor(ph_min,ph_max,suhu_min,suhu_max) VALUES (6.0,8.0,23.0,31.0);