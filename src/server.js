import express from "express";
//import verifyNameFieldMid from "./middlewares/verifyNameField-middleware.js";
import routers from "./routes/routes.js";
//import auth from "./middlewares/auth.middleware.js";
import db from "./database/db.js";
import dotenv from "dotenv";
//import login from "./controllers/login.controller"

dotenv.config();

const app = express();
const PORT = 3333;

app.use(express.json());

try {
    await db.sync({ alter:true, force: false});
    console.log("A conexão com o banco de dados foi realizada com sucesso!");
    
    app.listen(PORT, () => {
        console.log("O servidor está rodando na porta 3333");
    })
} catch (error) {
    console.log("Não foi possível conectar com o banco de dados: ",error);
    process.exit(1);
}

app.use(routers);


//app.use(auth);
//app.post('/login', login)

//app.use(verifyNameFieldMid);