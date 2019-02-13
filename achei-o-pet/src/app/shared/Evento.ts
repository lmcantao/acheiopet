import { Telefone } from './Telefone';

export class Evento {
    id: number;
    id_usuario: number;
    id_pet: number;
    tipo_evento: string;
    nome: string;
    descricao: string;
    local: string;
    data: string;
    status: boolean;
    img: string;
    telefone: Telefone;
}