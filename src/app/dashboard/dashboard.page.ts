import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { GetService } from '../services/get/get.service';
import { GenericService } from '../utils/genericService';
import { HttpTransportType, HubConnectionBuilder } from '@aspnet/signalr'; 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage extends GenericService implements OnInit {

  data: any;
  public vehiculos: any[];
  public estadosRuta: any[];
  public indicadores: any[];
  public options: any;
  public plugin = ChartDataLabels;
  dashboard: any;

  constructor(public getService: GetService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    super(getService, null, null, toastCtrl, modalCtrl);

    let dashboard = 

    this.data = {
      labels: ['Activos', 'Inactivos'],
      datasets: [
        {
          data: [90, 10],
          backgroundColor: [
            "#496427",
            "#a29fa0"
          ],
          hoverBackgroundColor: [
            "#496427",
            "#a29fa0"
          ]
        }]
    };
    this.estadosRuta = [
      { label: 'Inicio', value: '0' },
      { label: 'Transito', value: '1' },
      { label: 'Finalizado', value: '2' }
    ];
    this.vehiculos = [
      { placa: 'OMP888', cliente: 'Femsa', estadoRuta: 0 },
      { placa: 'ABC123', cliente: 'Plasticos S.A.', estadoRuta: 1 },
      { placa: 'TMZ274', cliente: 'Femsa', estadoRuta: 2 }
    ];
    this.indicadores = [
      { cliente: 'Femsa', numeroViajes: 4 },
      { cliente: 'Plasticos S.A.', numeroViajes: 2 }
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
    super.consumirGet('viajes/prueba').then((data:any)=>{
      this.dashboard = data;
    });
    this.conectarWebSocket();
  }

  conectarWebSocket(): void {
    let connection = new HubConnectionBuilder()
    .withUrl('http://localhost:60674/contador', {
      skipNegotiation: true,
      transport: HttpTransportType.WebSockets
    })
    .build();

    connection.start()
    .then(() => {
      console.log('Connected');

      connection.on('dashboard', (data) => {
        console.log(data);
      });

      //connection.invoke('GetContador');
    });   

  }

}
