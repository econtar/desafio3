// CONTROLLERS ATENDIMENTOS

import { createAtendRep, findAllAtendRep, findOneAtendRep, updateAtendRep, deleteAtendRep } from "../repositories/atend.repository.js";

// INSERT 
export const createAtendCont = async (req, res) => {
    try {
        const { id } = req.headers;
        const { paciente_id, psicologo_id, data_atendimento, observacao } = req.body;

        const novoAtend = await createAtendRep(id, paciente_id, psicologo_id, data_atendimento, observacao);

        return res.status(201).json(novoAtend);
    } catch (error) {
        return res.status(400).json({ message: "Não foi possível realizar o cadastro." })
    }
}

// FIND ALL
export const findALlAtendCont = async (req, res) => {
    try {
        const listarAtend = await findAllAtendRep();
        return res.status(200).json(listarAtend);
    } catch (error) {
        return res.status(500).json({ message: "Não foi possível realizar a ação." });
    }
}

// FIND ONE
export const findOneAtendCont = async (req, res) => {
    const { id } = req.params;

    const buscarAtend = await findOneAtendRep(id);

    if (!buscarAtend) {
        return res.status(404).json({ message: "Atendimento não encontrado." })
    }

    return res.status(200).json({ buscarAtend })
}

// UPDATE
export const updateAtendCont = async (req, res) => {
    const { id } = req.headers;
    const { paciente_id, psicologo_id, data_atendimento, observacao } = req.body;

    const atualizarAtend = await updateAtendRep(id, paciente_id, psicologo_id, data_atendimento, observacao)

    if (!atualizarAtend) {
        return res.status(404).json({ message: "Atendimento não encontrado." })
    }

    try {
        atualizarAtend.paciente_id = paciente_id;
        atualizarAtend.psicologo_id = psicologo_id;
        atualizarAtend.data_atendimento = data_atendimento;
        atualizarAtend.observacao = observacao;

        return res.status(202).json({ atualizarAtend })
    } catch (error) {
        return res.status(400).json("Não foi possível atualizar o atendimento.");
    }
}

// DELETE
export const deleteAtendCont = async (req, res) => {
    const { id } = req.headers;

    const deletarAtend = await deleteAtendRep(id);

    if (!deletarAtend) {
        return res.status(404).json("Atendimento não encontrado.");
    }

    return res.status(204).send();
}