import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

const sequelize = new Sequelize(dbName, dbUser, dbPassword,{
    dialect: "mysql",
    host: dbHost,
    port: 3306,
});

export default sequelize;
/*
const DB_CONFIGS = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
};

const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIGS);


(async () => {
    try {
        await db.authenticate();
        console.log('Banco de dados conectado com sucesso!');
    } catch (error) {
        console.error('Erro ao tentar realizar conexão com banco de dados.');
    }
})();

export { db };*/