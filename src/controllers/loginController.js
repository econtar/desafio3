import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import { psicMod as PsicologoRepository } from "../database/models/psicologoModel.js";

const jwtsecret = process.env.JWT_SECRET;

export default class LoginController {
    static async login(request, response) {
        try {
            const { email, senha } = request.body;
            const user = await PsicologoRepository.findOne({
                where: {
                    email,
                },
            });

            if (!user) {
                return response.status(401).json({
                    message: 'Falha na operação',
                    data: 'E-mail ou senha inválido, verifique e tente novamente',
                });
            }

            const passwordIsValid = bcrypt.compareSync(senha, user.senha);

            if (!passwordIsValid) {
                return response.status(401).json({
                    message: 'Falha na operação',
                    data: 'E-mail ou senha inválido, verifique e tente novamente',
                });
            }

            const token = jwt.sign(
                { id: user.id, email: user.email, nome: user.nome },
                jwtsecret,
                { expiresIn: 86400 }
            );

            return response.status(200).json({
                message: 'Operação bem-sucedida!',
                data: [token],
            });
        } catch (error) {
            console.error('Erro na operação de login: ', error);
            return response
                .status(500)
                .json({ message: 'Falha na operação', data: {} });
        }
    }
}