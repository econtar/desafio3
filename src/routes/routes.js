import { Router } from "express";

// IMPORTAR CONTROLLERS - LOGIN


// IMPORTAR CONTROLLERS - PSICÓLOGOS
import { createPsicCont, findAllPsicCont, findOnePsicCont, updatePsicCont, deletePsicCont } from "../controllers/psic.controller.js";

// IMPORTAR CONTROLLERS - PACIENTES
import { createPacCont, findALlPacCont, findOnePacCont, updatePacCont, deletePacCont } from "../controllers/pac.controller.js";

// IMPORTAR CONTROLLERS - ATENDIMENTOS
import { createAtendCont, findALlAtendCont, findOneAtendCont, updateAtendCont, deleteAtendCont } from "../controllers/atend.controller.js";
import verifyNameFieldMid from "../middlewares/verifyNameField-middleware.js";

const routers = Router();

// CRUD LOGIN (post)
routers.post('/login', login)

// CRUD PSICÓLOGOS
routers.post('/psicologos', verifyNameFieldMid, createPsicCont);
routers.get('/psicologos', findAllPsicCont);
routers.get('/psicologos/:id', findOnePsicCont);
routers.put('/psicologos', updatePsicCont);
routers.delete('/psicologos', deletePsicCont);

// CRUD PACIENTES
routers.post('/pacientes', verifyNameFieldMid, createPacCont);
routers.get('/pacientes', findALlPacCont);
routers.get('/pacientes/:id', findOnePacCont);
routers.put('/pacientes', updatePacCont);
routers.delete('/pacientes', deletePacCont);

// CRUD ATENDIMENTOS
routers.post('/atendimentos', createAtendCont);
routers.get('/atendimentos', findALlAtendCont);
routers.get('/atendimentos/:id', findOneAtendCont);

// CRUD DASHBOARD (opcional)

export default routers;