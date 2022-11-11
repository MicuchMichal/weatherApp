import { Component, OnInit } from '@angular/core';
import { HourlyData } from 'src/app/models/forecastModel';
import { serviceHandeling } from 'src/app/services/service-handeling';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.scss'],
})
export class FutureComponent implements OnInit  {

  hourlyData?: HourlyData [];
  
  constructor( private http: serviceHandeling ) { 
      this.hourlyData = this.http.hourlyData;
  }
  ngOnInit(): void {  }
  
  

  //fetching data from api
  // fetchData() {
  //   this.http.fetchData()
  //   .subscribe({
  //     next: (response) => {
  //       this.data.toWeatherDataArray(response);
  //     }
  //   });
  // }
  //transforming fetched data to interface HourlyData
  // toWeatherDataArray(response){
  //   for (let i = 0; i < 168; i ++){
  //     let temp: HourlyData;
  //     temp = {
  //       time: response.hourly.time[i],
  //       temperature_2m: response.hourly.temperature_2m[i],
  //       relativehumidity_2m: response.hourly.relativehumidity_2m[i],
  //       weathercode: response.hourly.weathercode[i],
  //       surface_pressure: response.hourly.surface_pressure[i],
  //       windspeed_10m: response.hourly.windspeed_10m[i]
  //     }
  //       //console.log(temp.time);
  //       temp.weathercode = this.transferWeatherCode(temp.weathercode);
  //       this.hourlyData.push(temp);
  //    }
  // }
  // //weatherCode transforming for images in html
  // transferWeatherCode(weatherCode) {
  //   switch (weatherCode) {
  //     case 0:
  //     case 1:
  //     case 2:
  //     case 3:
  //       //clear
  //       weatherCode = 1;
  //       break;
  //     case 45:
  //     case 48:
  //       //fog
  //       weatherCode = 2;
  //       break;
  //     case 51:
  //     case 53:
  //     case 55:
  //     case 56:
  //     case 57:  
  //       //drizzle & freezing drizzle
  //       weatherCode = 3;
  //       break;
  //     case 61:
  //     case 63:
  //     case 65:
  //       //rain
  //       weatherCode = 4;
  //       break;
  //     case 66:
  //     case 67:
  //       //freezing rain
  //       weatherCode = 5;
  //       break;
  //     case 71:
  //     case 73:
  //     case 75:
  //       //snowfall
  //       weatherCode = 6;
  //       break;
  //     case 77:
  //       //snow grains
  //       weatherCode = 7;
  //       break;  
  //     case 80:
  //     case 81:
  //     case 82:
  //       //rain shower
  //       weatherCode = 8;
  //       break;
  //     case 85:
  //     case 86:
  //       //snow shower
  //       weatherCode = 9;
  //       break;
  //     case 95:
  //       //thunderstorm - slight
  //       weatherCode = 10;
  //       break;
  //     case 96:
  //     case 99:
  //       //thunderstorm - heavy
  //       weatherCode = 11;
  //       break;
  //     default: weatherCode = 0;
  //   }
  //   return weatherCode;
  // }
  }

  

  


  
  
  


  
  

