import { BaseModel } from "../shared/BaseModel";


export class Paciente extends BaseModel{
    id: number;
    nome: String;
    telefone: String;
    idade: String;
    endereco: String;
 }