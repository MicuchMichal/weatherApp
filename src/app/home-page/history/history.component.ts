import { Component, OnInit } from '@angular/core';
import { HourlyData } from 'src/app/models/forecastModel';
import { serviceHandeling } from 'src/app/services/service-handeling'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  hourlyHistoryData?: HourlyData [];
  
  constructor( private http: serviceHandeling ) { 
    this.hourlyHistoryData = this.http.hourlyDataHistory;
  }

  ngOnInit(): void {  }
}
