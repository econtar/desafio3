import { DataTypes } from "sequelize";
import db from "../db.js";

export const psicMod = db.define('tabela_psicologos', {

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
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apresentacao: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    tableName: "tabela_psicologos",
    timestamps: false,
});