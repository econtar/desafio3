import { pacMod } from "../database/models/pacienteModel.js";

// INSERT
export const createPacRep = async (nome, email, idade) => {
    return await pacMod.create({ nome, email, idade });
};

// FIND ALL
export const findAllPacRep = async () => {
    return await pacMod.findAll();
};

// FIND ONE
export const findOnePacRep = async (id) => {
    const buscarPacRep = await pacMod.findOne({ where: { id } });

    return buscarPacRep;
};

// UPDATE
export const updatePacRep = async (id, nome, email, idade) => {
    await pacMod.update(
        { nome, email, idade },
        { where: { id } }
    );
    return await pacMod.findOne({ where: { id } });
};

// DELETE
export const deletePacRep = async (id) => {
    await pacMod.destroy({ where: { id } });
};