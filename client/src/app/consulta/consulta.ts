import { BaseModel } from "../shared/basemodel";
import { Paciente } from "../paciente/paciente";
import { Medico } from "../medico/medico";

export class Consulta extends BaseModel{
    id: number;
	title: String;
	start: Date;
    end: Date;
    paciente: Paciente;
    medico: Medico;
 }