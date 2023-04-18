// CONTROLLERS ATENDIMENTOS

import { createAtendRep, findAllAtendRep, findOneAtendRep, updateAtendRep, deleteAtendRep } from "../repositories/atendimentoRepository.js";

// INSERT 
export const createAtendCont = async (req, res) => {
    try {
        const psicologo_id = req.id;
        const paciente_id = req.body.paciente_id
        const data_atendimento = req.body.data_atendimento;
        const observacao = req.body.observacao;

        const novoAtend = await createAtendRep(paciente_id, psicologo_id, data_atendimento, observacao);

        return res.status(201).json(novoAtend);
    } catch (error) {
        return res.status(400).json({ message: "Não foi possível realizar o cadastro." })
    }
}

// FIND ALL
export const findAllAtendCont = async (req, res) => {
    try {
        const listarAtend = await findAllAtendRep();
        return res.status(200).json(listarAtend);
    } catch (error) {
        return res.status(500).json({ message: "Não foi possível realizar a ação." });
    }
}

// FIND ONE
export const findOneAtendCont = async (req, res) => {
    const idAtend = req.params.id;

    const buscarAtend = await findOneAtendRep(idAtend);

    if (!buscarAtend) {
        return res.status(404).json({ message: "Atendimento não encontrado." })
    }

    return res.status(200).json({ buscarAtend })
}

// UPDATE
export const updateAtendCont = async (req, res) => {
    const idAtend = req.params.id;
    const data_atendimento = req.body.data_atendimento;
    const observacao = req.body.observacao;
    const psicologo_id = req.body.psicologo_id;
    const paciente_id = req.body.paciente_id;
    try {
        const umAtend = await findOneAtendRep(idAtend);
    if (!umAtend) {
        return res.status(404).json({ message: `Atendimento ID ${idAtend} não encontrado.` });
    }else{
        const atualizarAtend=await updateAtendRep(idAtend, data_atendimento, observacao, psicologo_id, paciente_id);
        return res.status(202).json({ message: `Atendimento de ID ${idAtend} atualizado com sucesso: `, atualizarAtend });
    }
        
    } catch (error) {
        
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