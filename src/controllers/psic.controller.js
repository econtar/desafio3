// CONTROLLERS PSICÓLOGOS

import { createPsicRep, deletePsicRep, findAllPsicRep, findOnePsicRep, updatePsicRep } from '../repositories/psic.repository.js';

// INSERT
export const createPsicCont = async (req, res) => {
    try {
        const { id } = req.headers;
        const { nome, email, senha, apresentacao } = req.body;

        const novoPsic = await createPsicRep(nome, email, senha, apresentacao);

        return res.status(201).json({ novoPsic });
    } catch (error) {
        return res.status(400).json({ message: "Não foi possível realizar o cadastro." })
    }
}

// FIND ALL
export const findAllPsicCont = async (req, res) => {
    try {
        const listarPsic = await findAllPsicRep();
        return res.status(200).json(listarPsic);
    } catch (error) {
        return res.status(400).json({ message: "Não foi possível realizar a ação." });
    }
}

// FIND ONE - 
export const findOnePsicCont = async (req, res) => {
    const { id } = req.params;

    const buscarPsic = await findOnePsicRep(id);

    if (!buscarPsic) {
        return res.status(404).json({ message: "ID não encontrado." })
    }

    return res.status(200).json({ buscarPsic })
}

// UPDATE
export const updatePsicCont = async (req, res) => {
    const { id } = req.headers;
    const { nome, email, senha, apresentacao } = req.body;

    const atualizarPsic = await updatePsicRep(nome, email, senha, apresentacao);

    if (!atualizarPsic) {
        return res.status(404).json({ message: "ID não encontrado." })
    }

    // essa parte é onde o nome antigo muda pro nome novo
    try {
        atualizarPsic.nome = nome;
        atualizarPsic.email = email;
        atualizarPsic.senha = senha;
        atualizarPsic.apresentacao = apresentacao;

        return res.status(202).json({ atualizarPsic })
    } catch (error) {
        return res.status(400).json({ message: "Não foi possível atualizar o cadastro." });
    }
}

// DELETE
export const deletePsicCont = async (req, res) => {
    const { id } = req.headers;
    const deletarPsic = await deletePsicRep(id);

    if (!deletarPsic) {
        return res.status(404).json({ message: "ID não encontrado." });
    }

    return res.status(204).send();
}