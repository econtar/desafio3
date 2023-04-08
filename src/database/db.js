import { Sequelize } from "sequelize";

const DB_NAME = "lavie";
const DB_USER = "root";
const DB_PASS = "th4*H4_t7-bah";

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

export { db };