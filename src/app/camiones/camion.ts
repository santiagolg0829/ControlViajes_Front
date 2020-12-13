export class Camion{
    id: number;
    placa: string;
    remolque:string;
    esPropio:boolean;
    estadoTaller:boolean;
    activo: boolean;

    constructor(){
        this.id = 0;
        this.placa = "";
        this.remolque = "";
        this.esPropio = true;
        this.activo = true;
        this.estadoTaller = false;
    }
}