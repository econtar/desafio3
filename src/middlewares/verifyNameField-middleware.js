import { errorSizeName, errorTypeName } from "../errors/standardErrorResponses.js";

export default function verifyNameFieldMid(req, res, next) {
    const { nome } = req.body;

    if (typeof nome !== "string") {
        return res.status(400).json({ message: errorTypeName });
    }

    if (nome.length < 3) {
        return res.status(400).json({ message: errorSizeName });
    }

    next();
}