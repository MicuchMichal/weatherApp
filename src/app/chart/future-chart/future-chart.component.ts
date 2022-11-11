import { Component, OnInit } from '@angular/core';
import { HourlyData } from 'src/app/models/forecastModel';
import { serviceHandeling } from 'src/app/services/service-handeling'
import { Chart, registerables } from 'chart.js';
import { chartHandeling } from 'src/app/services/chart-handeling'
Chart.register(...registerables);

@Component({
  selector: 'app-future-chart',
  templateUrl: './future-chart.component.html',
  styleUrls: ['./future-chart.component.scss']
})
export class FutureChartComponent implements OnInit {
  
  chart : Chart;
  
  constructor(private http: serviceHandeling, private chartsService: chartHandeling) {
    this.displayChart()
  }

  ngOnInit(): void {  }
  

  displayChart(){
    let chart = new Chart("lineChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
                '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
        datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
                '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
                  '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
    });
  }
}


  

  
  






