// CONTROLLERS PSICÓLOGOS

import { createPsicRep, deletePsicRep, findAllPsicRep, findOnePsicRep, updatePsicRep } from '../repositories/psicologoRepository.js';
import bcrypt from "bcryptjs";

// INSERT
export const createPsicCont = async (req, res) => {
    try {
        const nome = req.body.nome;
        const email = req.body.email;
        const senha = bcrypt.hashSync(req.body.senha,8);
        const apresentacao = req.body.apresentacao;

        const novoPsic = await createPsicRep(nome, email, senha, apresentacao);
        if (novoPsic!=null){
            return res.status(201).json({ message: "Operação realizada com sucesso!", data: novoPsic });
        }else{
            return res.status(400).json({ message: "Não foi possível realizar o cadastro."})
        }        
    } catch (error) {
        return res.status(500).json({ message: "Não foi possível realizar o cadastro. Verifique o objeto json enviado: ", error })
    }
}

// FIND ALL
export const findAllPsicCont = async (req, res) => {
    try {
        const listarPsic = await findAllPsicRep();
        return res.status(200).json({message: "Operação realizada com sucesso!", data: listarPsic});
    } catch (error) {
        return res.status(400).json({ message: "Não foi possível realizar a ação." });
    }
}

// FIND ONE - 
export const findOnePsicCont = async (req, res) => {
    try {
        const idPsic = req.params.id;
        const buscarPsic = await findOnePsicRep(idPsic);
        if (buscarPsic!=null) {
            return res.status(200).json({message:"Operação bem-sucedida!", data: buscarPsic });
        } else {
            return res.status(404).json({ message: `Psicologo de ID ${idPsic} não encontrado.` });
        }
        
    } catch (error) {
        return res.status(500).json({ message: "Erro ao executar a operação: ", error });
    }
}

// UPDATE
export const updatePsicCont = async (req, res) => {
    try {
        const idPsic = req.params.id;
        const nome = req.body.nome;
        const email = req.body.email;
        const senha = bcrypt.hashSync(req.body.senha,8);
        const apresentacao = req.body.apresentacao;

        const atualizarPsic = await updatePsicRep(idPsic, nome, email, senha, apresentacao);
        if (atualizarPsic!=null) {
            return res.status(202).json({ message: `Operação realizada com sucesso no psicologo de ID ${idPsic}!`, data: atualizarPsic });
        } else {
            return res.status(404).json({ message: `Não foi possível atualizar o ID ${idPsic}. ID não encontrado.`});
        }
    } catch (error) {
        return res.status(500).json({ message: "Não foi possível realizar a operação solicitada devido ao erro: ", error});
    }
}

// DELETE
export const deletePsicCont = async (req, res) => {
    try {
        const idPsic = req.params.id;
        const buscarPsic = await findOnePsicRep(idPsic);
        if (buscarPsic!=null) {
            await deletePsicRep(idPsic);
            return res.status(200).json({message:"Operação bem-sucedida! Psicologo excluído:", data: buscarPsic });
        } else {
            return res.status(404).json({ message: `Psicologo de ID ${idPsic} não encontrado.` });
        }
        
    } catch (error) {
        return res.status(500).json({ message: "Erro ao executar a operação: ", error });
    }    
}