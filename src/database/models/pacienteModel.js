import { DataTypes } from "sequelize";
import db from "../db.js";

export const pacMod = db.define('tabela_pacientes', {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    idade: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: "tabela_pacientes",
    timestamps: false,
});