import { Injectable } from '@angular/core';
import { serviceHandeling } from './service-handeling';
import { HourlyData } from 'src/app/models/forecastModel';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Injectable({
  providedIn: 'root'
})

export class chartHandeling {

  hourlyData?: HourlyData [] = [];
  hourlyDataHistory?: HourlyData [] = [];


  char: any;

  constructor( private http: serviceHandeling ) { }

  displayChart(){
    this.char = new Chart("lineChart", {
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
    console.log(this.char);
    return this.char
  }
  
}