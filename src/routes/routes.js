import express from "express";

// IMPORTAR CONTROLLERS - LOGIN
import {login} from "../controllers/login.controller.js"

// IMPORTAR CONTROLLERS - PSICÓLOGOS
import { createPsicCont, findAllPsicCont, findOnePsicCont, updatePsicCont, deletePsicCont } from "../controllers/psic.controller.js";

// IMPORTAR CONTROLLERS - PACIENTES
import { createPacCont, findAllPacCont, findOnePacCont, updatePacCont, deletePacCont } from "../controllers/pac.controller.js";

// IMPORTAR CONTROLLERS - ATENDIMENTOS
import { createAtendCont, findALlAtendCont, findOneAtendCont, updateAtendCont, deleteAtendCont } from "../controllers/atend.controller.js";
import verifyNameFieldMid from "../middlewares/verifyNameField-middleware.js";

const routers = express.Router();

//Verifica a saúde da aplicação
routers.get("/health", (req, res) =>{
    res.status(200).json({message:"API funcionando corretamente!"});
});

// CRUD LOGIN (post)
routers.post('/login', login);

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
routers.post('/atendimentos', createAtendCont);
routers.get('/atendimentos', findALlAtendCont);
routers.get('/atendimentos/:id', findOneAtendCont);

// CRUD DASHBOARD (opcional)

export default routers;