export class Dashboard {
    lstVehiculosPropios: any[];
    lstVehiculosTerceros: any[];
    lstIndicadores: any[];
    lstDatosTorta: any[];
    sumaAnticiposDia: number;
    acumuladoMes: number;

    constructor() {
        this.lstVehiculosPropios = [];
        this.lstVehiculosTerceros = [];
        this.lstIndicadores = [];
        this.lstDatosTorta = [];
        this.sumaAnticiposDia = 0;
        this.acumuladoMes = 0;
    }
}