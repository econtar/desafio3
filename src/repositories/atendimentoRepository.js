import { atendMod } from "../database/models/atendimentoModel.js";

// INSERT
export const createAtendRep = async (paciente_id, psicologo_id,data_atendimento,observacao) => {
    return await atendMod.create({ data_atendimento, observacao, psicologo_id, paciente_id });
};

// FIND ALL
export const findAllAtendRep = async () => {
    return await atendMod.findAll();
};

// FIND ONE
export const findOneAtendRep = async (id) => {
    const buscarPacRep = await atendMod.findOne({ where: { id } });

    return buscarPacRep;
};

// UPDATE
export const updateAtendRep = async (id, data_atendimento, observacao, psicologo_id, paciente_id) => {
    await atendMod.update(
        { data_atendimento, observacao, psicologo_id, paciente_id },
        { where: { id } }
    );
    return await atendMod.findOne({ where: { id } });
};

// DELETE
export const deleteAtendRep = async (id) => {
    await atendMod.destroy({ where: { id } });
};