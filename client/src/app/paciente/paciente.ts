import { BaseModel } from "../shared/basemodel";

export class Paciente extends BaseModel{
    id: number;
    nome: String;
    telefone: String;
    idade: String;
    endereco: String;
    sexo: String;
 }