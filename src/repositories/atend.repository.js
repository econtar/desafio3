import { atendMod } from "../database/models/atend-models.js";

// INSERT
export const createAtendRep = async (nome, email, idade) => {
    return await atendMod.create({ paciente_id, psicologo_id, data_atendimento, observacao });
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
export const updateAtendRep = async (id, paciente_id, psicologo_id, data_atendimento, observacao) => {
    await pacMod.update(
        { paciente_id, psicologo_id, data_atendimento, observacao },
        { where: { id } }
    );
    return await atendMod.findOne({ where: { id } });
};

// DELETE
export const deleteAtendRep = async (id) => {
    await atendMod.destroy({ where: { id } });
};