import type { categoria } from "./categoria";

export interface cars{
    
    id: number;
    nome: string;
    marca: string;
    placa: string;
    ano: number;
    categoriaId: categoria;
    valor: number;


}