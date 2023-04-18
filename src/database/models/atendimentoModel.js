import { DataTypes } from "sequelize";
import db from "../db.js";
import { psicMod } from "./psicologoModel.js";
import { pacMod } from "./pacienteModel.js";

export const atendMod = db.define('tabela_atendimentos', {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    data_atendimento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    observacao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    psicologo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: psicMod,
            key: 'id',
        }
    },
    paciente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: pacMod,
            key: 'id',
        }
    },
}, {
    tableName: "tabela_atendimentos",
    timestamps: false,
});