export class Usuario {

    cedula: string;
    password: string;
    nombre: string;
    email: string;
    celular: string;
    idCliente: number;
    nombreCliente: string;
    roles: any[];
    activo: boolean;

    constructor() {
        this.cedula = "";
        this.password = "";
        this.nombre = "";
        this.email = "";
        this.celular = "";
        this.idCliente = 0;
        this.nombreCliente = "";
        this.roles = [
            {
                "nombre": "Administrador",
                "seleccionado": false
            },
            {
                "nombre": "Auxiliar",
                "seleccionado": false
            },
            {
                "nombre": "Cliente",
                "seleccionado": false
            },
            {
                "nombre": "Conductor",
                "seleccionado": false
            }
        ];
        this.activo = true;
    }
}