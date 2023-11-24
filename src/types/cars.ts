import type { categoria } from "./categoria";

export interface cars{
[x: string]: any;
    
    id: number;
    nome: string;
    marca: string;
    placa: string;
    ano: number;
    categoriaId: categoria;
    valor: number;


}