import express from "express";

// IMPORTAR CONTROLLERS - LOGIN
import loginController from "../controllers/loginController.js"

// IMPORTAR CONTROLLERS - PSICÓLOGOS
import { createPsicCont, findAllPsicCont, findOnePsicCont, updatePsicCont, deletePsicCont } from "../controllers/psicologoController.js";

// IMPORTAR CONTROLLERS - PACIENTES
import { createPacCont, findAllPacCont, findOnePacCont, updatePacCont, deletePacCont } from "../controllers/pacienteController.js";

// IMPORTAR CONTROLLERS - ATENDIMENTOS
import { createAtendCont, findAllAtendCont, findOneAtendCont, updateAtendCont, deleteAtendCont } from "../controllers/atendimentoController.js";

// IMPORTAR MIDDLEWARES
import verifyNameFieldMid from "../middlewares/verifyNameField-middleware.js";
import verifyToken from "../middlewares/verifyToken.js";
const routers = express.Router();

//Verifica a saúde da aplicação
routers.get("/health", (req, res) =>{
    res.status(200).json({message:"API funcionando corretamente!"});
});

// CRUD LOGIN (post)
routers.post('/login', loginController.login);

// CRUD PSICÓLOGOS
routers.post('/psicologos', verifyNameFieldMid, createPsicCont);
routers.get('/psicologos', findAllPsicCont);
routers.get('/psicologos/:id', findOnePsicCont);
routers.put('/psicologos/:id', updatePsicCont);
routers.delete('/psicologos/:id', deletePsicCont);

// CRUD PACIENTES
routers.post('/pacientes', verifyNameFieldMid, createPacCont);
routers.get('/pacientes', findAllPacCont);
routers.get('/pacientes/:id', findOnePacCont);
routers.put('/pacientes/:id', updatePacCont);
routers.delete('/pacientes/:id', deletePacCont);

// CRUD ATENDIMENTOS
routers.post('/atendimentos', verifyToken, createAtendCont);
routers.get('/atendimentos', verifyToken, findAllAtendCont);
routers.get('/atendimentos/:id', verifyToken, findOneAtendCont);
routers.put('/atendimentos/:id', verifyToken, updateAtendCont);
routers.delete('/atendimentos/:id', verifyToken, deleteAtendCont);

// CRUD DASHBOARD (opcional)

export default routers;