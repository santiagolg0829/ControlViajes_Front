import { Sede } from '../sedes/sede';

export class Cliente {
    id: number;
    nombre: string;
    lstSedes: Sede[];
    activo: boolean;

    constructor() {
        this.id = 0;
        this.nombre = "";
        this.lstSedes = [];
        this.activo = true;
    }
}