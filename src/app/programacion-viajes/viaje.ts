export class Viaje {
    id: number;
    fecha: Date;
    idCamion: number;
    idConductor: string;
    idAuxiliar: string;
    idCliente: number;
    idOrigen: number;
    idDestino: number;
    numeroManifiesto: string;
    numeroCuenta: string;
    valorAnticipo: number;
    inicioRuta: Date;
    finRuta: Date;
    fechaRegistro: Date;
    placa: string;
    nombreConductor: string;
    nombreAuxiliar: string;
    nombreCliente: string;
    nombreOrigen: string;
    nombreDestino: string;   
    estado: string; 

    constructor() {
        this.id = 0;
    }
}