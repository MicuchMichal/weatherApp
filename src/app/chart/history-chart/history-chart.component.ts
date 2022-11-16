import { Component } from '@angular/core';
import { serviceHandeling } from 'src/app/services/service-handeling'
import { Chart, registerables } from 'chart.js';
import { timer } from 'rxjs'
Chart.register(...registerables)

@Component({
  selector: 'app-history-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.scss']
})
export class HistoryChartComponent {

  chart: Chart;
  time: string [];
  temperature: number [];

  constructor(private http: serviceHandeling) { 
    this.time = this.http.timeHistory;
    this.temperature = this.http.temperatureHistory;
    timer(100).subscribe(functinom => {
      this.http.displayChart(this.time, this.temperature, "linechartHisotry");
    })
  }
}
