import { Component, OnInit } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  data: any;
  public vehiculos: any[];
  public estadosRuta: any[];
  public indicadores: any[];
  public options: any;
  public plugin = ChartDataLabels;

  constructor() {
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
  }

}
