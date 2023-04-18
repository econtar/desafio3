import { psicologo } from "./psicologoModel.js";
import { paciente } from "./pacienteModel.js";
import { atendimento } from "./atendimentoModel.js";

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