import { psicMod } from "../database/models/psic-models.js";


// INSERT
export const createPsicRep = async (nome, email, senha, apresentacao) => {
    return await psicMod.create({ nome, email, senha, apresentacao }); // aqui eu chamo a model e passo os parâmetros que vou criar - e essa linha leva os nomes para o banco de dados
};

// FIND ALL
export const findAllPsicRep = async () => {
    return await psicMod.findAll();
};

// FIND ONE
export const findOnePsicRep = async (id) => {
    const buscarPsicRep = await psicMod.findOne({ where: { id } });

    return buscarPsicRep;
};

// UPDATE
export const updatePsicRep = async (id, nome, email, senha, apresentacao) => {
    await psicMod.update(
        { nome, email, senha, apresentacao },
        { where: { id } }
    );
    return await psicMod.findOne({ where: { id } });
};

// DELETE
export const deletePsicRep = async (id) => {
    await psicMod.destroy({ where: { id } });
};