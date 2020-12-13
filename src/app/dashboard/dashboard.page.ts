import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { GetService } from '../services/get/get.service';
import { GenericService } from '../utils/genericService';
import { HttpTransportType, HubConnectionBuilder } from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
import { Dashboard } from './dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage extends GenericService implements OnInit {

  data: any;
  public vehiculosPropios: any[];
  public vehiculosTerceros: any[];
  public estadosRuta: any[];
  public indicadores: any[];
  public options: any;
  public plugin = ChartDataLabels;
  dashboard: Dashboard;
  sumaAnticiposDia: number;
  acumuladoMes: number;

  constructor(public getService: GetService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    super(getService, null, null, toastCtrl, modalCtrl);

    this.acumuladoMes = 0;
    this.sumaAnticiposDia = 0;

    this.estadosRuta = [
      { label: 'Inicio', value: '1' },
      { label: 'Transito', value: '2' },
      { label: 'Finalizado', value: '3' }
    ];

    this.options = {
      tooltips: {
        enabled: false
      },
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            let datasets = ctx.chart.data.datasets;
            if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
              let sum = datasets[0].data.reduce((a, b) => a + b, 0);
              let percentage = Math.round((value / sum) * 100) + '%';
              return percentage + " - " + value;
            } else {
              return value;
            }
          },
          color: '#FFF',
        }
      }
    };
  }

  ngOnInit() {
    this.conectarWebSocket();
    super.consumirGet('viajes/prueba').then((data: any) => {
      this.dashboard = data;
      console.log('pintando con:');
      console.log(this.dashboard);
      this.dibujarDashboard();
    });
  }

  conectarWebSocket(): void {
    let connection = new HubConnectionBuilder()
      .withUrl(environment.baseServer + 'contador', {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets
      })
      .build();

    connection.start()
      .then(() => {
        console.log('Connected');
        connection.on('dashboard', (data) => {
          console.log("data:");
          if (data.success) {

            this.dashboard = data.message;
            console.log('pintando con:');
            console.log(this.dashboard);
            this.dibujarDashboard();
          }
        });
        //connection.invoke('GetContador');
      });
  }

  dibujarDashboard() {
    this.vehiculosPropios = this.dashboard.lstVehiculosPropios;
    this.vehiculosTerceros = this.dashboard.lstVehiculosTerceros;
    this.indicadores = this.dashboard.lstIndicadores;
    this.acumuladoMes = this.dashboard.acumuladoMes;
    this.sumaAnticiposDia = this.dashboard.sumaAnticiposDia;
    this.data = {
      labels: ['Activos', 'Inactivos', 'Taller'],
      datasets: [
        {
          data: this.dashboard.lstDatosTorta,
          backgroundColor: [
            "#36A2EB",
            "#FFCE56",
            "#AA023A"
          ],
          hoverBackgroundColor: [
            "#496427",
            "#a29fa0",
            "#AA023A"
          ]
        }]
    };
  }

}