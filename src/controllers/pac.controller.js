// CONTROLLERS PACIENTES

import { createPacRep, deletePacRep, findAllPacRep, findOnePacRep, updatePacRep } from '../repositories/pac.repository.js';

// INSERT 
export const createPacCont = async (req, res) => {
    try {
        const { nome, email, idade } = req.body;

        const novoPac = await createPacRep(nome, email, idade);

        if (novoPac!=null) {
            return res.status(201).json({ message: "Paciente registrado com sucesso!", data: novoPac });
        } else {
            return res.status(400).json({ message: "Não foi possível realizar o cadastro." });
        }
    } catch (error) {
        return res.status(500).json({ message: "Erro na aplicação: ", error});
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
    try {
        const idPac = req.params.id;

        const buscarPac = await findOnePacRep(idPac);
    
        if (!buscarPac) {
            return res.status(404).json({ message: `Paciente de ID ${idPac} não encontrado.`});
        }else{
            return res.status(200).json({ message: `Paciente de ID ${idPac} localizado: `, buscarPac });
        }
    } catch (error) {
        return res.status(500).json({message:"Erro ao executar a operação", error});        
    }
}

// UPDATE
export const updatePacCont = async (req, res) => {
    try {
        const idPac = req.params.id;
        const { nome, email, idade } = req.body;
    
        const atualizarPac = await updatePacRep(idPac, nome, email, idade);
        if(atualizarPac!=null){
            return res.status(200).json({message: `O paciente de ID ${idPac} foi atualizado com sucesso: `, data: atualizarPac});
        }else{
            return res.status(404).json({ message: `O paciente de ID ${idPac} não foi encontrado.` });
        }
        
    } catch (error) {
        return res.status(500).json({message: `Erro na aplicação ao tentar atualizar o paciente de ID ${idPac}: `, error});       
    }
}

// DELETE
export const deletePacCont = async (req, res) => {
    const idPac = req.params.id;
    const deletarPac = await findOnePacRep(idPac);

    if (!deletarPac) {
        return res.status(404).json({ message: `Não foi possível excluir o paciente pois o ID ${idPac} não foi encontrado.`});
    }else{
        await deletePacRep(idPac);
        return res.status(204).json({ message: `Paciente de ID ${idPac} excluído com sucesso: `, data: deletarPac});
    }
}