// CONTROLLERS PACIENTES

import { createPacRep, deletePacRep, findAllPacRep, findOnePacRep, updatePacRep } from '../repositories/pac.repository.js';

// INSERT 
export const createPacCont = async (req, res) => {
    try {
        const { nome, email, idade } = req.body;

        const novoPac = await createPacRep(nome, email, idade);

        return res.status(201).json({ novoPac });
    } catch (error) {
        return res.status(400).json({ message: "Não foi possível realizar o cadastro." })
    }
}

// FIND ALL
export const findAllPacCont = async (req, res) => {
    try {
        const listarPac = await findAllPacRep();
        return res.status(200).json({ listarPac });
    } catch (error) {
        return res.status(500).json({ message: "Não foi possível realizar a ação." });
    }
}

// FIND ONE
export const findOnePacCont = async (req, res) => {
    const { id } = req.params.id;

    const buscarPac = await findOnePacRep(id);

    if (!buscarPac) {
        return res.status(404).json({ message: "ID não encontrado." })
    }

    return res.status(200).json({ buscarPac })
}

// UPDATE
export const updatePacCont = async (req, res) => {
    const { id } = req.params.id;
    const { nome, email, idade } = req.body;

    const atualizarPac = await updatePacRep(id, nome, email, idade);

    if (!atualizarPac) {
        return res.status(404).json({ message: "ID não encontrado." })
    }

    try {
        atualizarPac.name = nome;
        atualizarPac.email = email;
        atualizarPac.idade = idade;

        return res.status(200).json({ atualizarPac })
    } catch (error) {
        return res.status(400).json({ message: "Não foi possível atualizar o cadastro." });
    }
}

// DELETE
export const deletePacCont = async (req, res) => {
    const { id } = req.headers;
    const deletarPac = await deletePacRep(id);

    if (!deletarPac) {
        return res.status(404).json({ message: "ID não encontrado." });
    }

    return res.status(204).send();
}