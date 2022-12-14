import { Component, OnInit } from '@angular/core';
import { HourlyData } from 'src/app/models/forecastModel';
import { serviceHandeling } from 'src/app/services/service-handeling';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.scss']
})
export class PresentComponent implements OnInit {

  actualWeather?: HourlyData[];

  constructor( private data: serviceHandeling ) {
    this.actualWeather = this.data.actualWeather;
  }
  ngOnInit(): void {}
    
  }
