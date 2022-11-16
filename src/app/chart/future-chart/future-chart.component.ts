import { Component } from '@angular/core';
import { serviceHandeling } from 'src/app/services/service-handeling'
import { Chart, registerables } from 'chart.js';
import { timer } from 'rxjs';
Chart.register(...registerables);

@Component({
  selector: 'app-future-chart',
  templateUrl: './future-chart.component.html',
  styleUrls: ['./future-chart.component.scss']
})
export class FutureChartComponent {
  
  chart: Chart;
  time: string [];
  temperature: number [];

  constructor(private http: serviceHandeling) {
    timer(100).subscribe(functino => {
      this.time = this.http.timeFuture;
      this.temperature = this.http.temperatureFuture;
      this.http.displayChart(this.time, this.temperature, "linechart");
    })
  }
}


  

  
  






