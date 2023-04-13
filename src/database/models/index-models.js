import { psicologo } from "./models-psic.js";
import { paciente } from "./models-pac.js";
import { atendimento } from "./models-atend.js";

paciente.hasMany(atendimento);
psicologo.hasMany(atendimento);

atendimento.BelongsTo(paciente, {
    foreignKey: "paciente_id",
});

atendimento.BelongsTo(psicologo, {
    foreignKey: "psicologo_id",
});

export default {
    psicologo,
    paciente,
    atendimento,
};