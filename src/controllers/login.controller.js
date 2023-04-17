import { findPsicologoByEmail } from "../repositories/psic.repository.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import {psicMod} from "../database/models/psic-models.js";

const jwtsecret = process.env.JWT_SECRET;

export const login = async (req, res) => {
    console.log("Teste da função login");
    const email = req.body.email;
    const senha = req.body.senha;
    try {
        const psic = await psicMod.findOne({
            where:{email,},
        });
        console.log("Encontrou o psicologo");
        /*const {emailPsi} = psic.email;
        const {senhaPsi} = psic.senha;*/
        console.log(email);
        console.log(senha);
        console.log(psic);
        const senhaValida = bcrypt.compareSync(senha, psic.senha);
        //console.log(emailPsi);
        //console.log(senhaPsi);

        if (psic!=null && senhaValida==true) {
            console.log("Validou usuário e senha");
            const token = jwt.sign(
                { id: psic.id, email: psic.email, nome: psic.nome },
                jwtsecret,
                { expiresIn: 86400 }
            );
            return res.status(200).send({ auth: true, token: token });
        }else{
            return res.status(401).json({ message: "e-mail ou senha inválidos!" });
        }
        //return res.status(200).json({message:"Testando autenticação: ", data: psic});
    } catch (error) {
        return res.status(500).json({message: "Falha na autenticação: ", error});
    }
};