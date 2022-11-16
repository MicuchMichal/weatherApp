import { Component } from '@angular/core';
import { serviceHandeling } from 'src/app/services/service-handeling'
export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  constructor(private data: serviceHandeling) {  }
}
