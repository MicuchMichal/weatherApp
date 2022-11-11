import { Component, OnInit } from '@angular/core';
import { HourlyData } from 'src/app/models/forecastModel';
import { serviceHandeling } from 'src/app/services/service-handeling'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor(private data: serviceHandeling) { 

  }
  ngOnInit(): void {  }
}
