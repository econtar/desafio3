// CONTROLLERS PSICÓLOGOS

import { createPsicRep, deletePsicRep, findAllPsicRep, findOnePsicRep, updatePsicRep } from '../repositories/psic.repository.js';

// INSERT
export const createPsicCont = async (req, res) => {
    try {
        const { nome, email, senha, apresentacao } = req.body;

        const novoPsic = await createPsicRep(nome, email, senha, apresentacao);

        res.status(201).json({ message: "Operação realizada com sucesso!", data: novoPsic });
    } catch (error) {
        res.status(400).json({ message: "Não foi possível realizar o cadastro." })
    }
}

// FIND ALL
export const findAllPsicCont = async (req, res) => {
    try {
        const listarPsic = await findAllPsicRep();
        res.status(200).json({message: "Operação realizada com sucesso!", data: listarPsic});
    } catch (error) {
        res.status(400).json({ message: "Não foi possível realizar a ação." });
    }
}

// FIND ONE - 
export const findOnePsicCont = async (req, res) => {
    try {
        const idPsic = req.params.id;
        const buscarPsic = await findOnePsicRep(idPsic);
        if (buscarPsic!=null) {
            res.status(200).json({message:"Operação bem-sucedida!", data: buscarPsic });
        } else {
            res.status(404).json({ message: `Psicologo de ID ${idPsic} não encontrado.` });
        }
        
    } catch (error) {
        res.status(404).json({ message: "Erro ao executar a operação: ", error });
    }
}

// UPDATE
export const updatePsicCont = async (req, res) => {
    try {
        const idPsic = req.params.id;
        const nome = req.body.nome;
        const email = req.body.email;
        const senha = req.body.senha;
        const apresentacao = req.body.apresentacao;

        const atualizarPsic = await updatePsicRep(idPsic, nome, email, senha, apresentacao);
        if (atualizarPsic!=null) {
            res.status(202).json({ message: `Operação realizada com sucesso no psicologo de ID ${idPsic}!`, data: atualizarPsic });
        } else {
            res.status(404).json({ message: `Não foi possível atualizar o ID ${idPsic}. ID não encontrado.`});
        }
    } catch (error) {
        res.status(404).json({ message: "Não foi possível realizar a operação solicitada devido ao erro: ", error});
    }
}

// DELETE
export const deletePsicCont = async (req, res) => {
    try {
        const idPsic = req.params.id;
        const buscarPsic = await findOnePsicRep(idPsic);
        if (buscarPsic!=null) {
            await deletePsicRep(idPsic);
            res.status(200).json({message:"Operação bem-sucedida! Psicologo excluído:", data: buscarPsic });
        } else {
            res.status(404).json({ message: `Psicologo de ID ${idPsic} não encontrado.` });
        }
        
    } catch (error) {
        res.status(404).json({ message: "Erro ao executar a operação: ", error });
    }    
}