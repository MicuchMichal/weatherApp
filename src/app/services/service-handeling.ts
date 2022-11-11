import { Injectable } from '@angular/core';
import { ForecastService } from './forecast.service'
import { HourlyData } from 'src/app/models/forecastModel';

@Injectable({
  providedIn: 'root'
})

export class serviceHandeling {

  hourlyData?: HourlyData [] = [];
  hourlyDataHistory?: HourlyData [] = [];

  constructor( private http: ForecastService ) { 
    this.fetchData();
    this.fetchDataHistory();
  }
  /*  
    fetching data from API
  */
  fetchData() {
    this.http.fetchData()
    .subscribe({
      next: (response) => {
        this.toWeatherDataArray(response, 72, this.hourlyData);
      }
    });
    return this.hourlyData;
  }
  fetchDataHistory() {
    this.http.fetchDataHistory()
    .subscribe({
      next: (response) => {
        this.toWeatherDataArray(response, 100, this.hourlyDataHistory)
      }
    });
    return this.hourlyDataHistory;
  }
  /*  
    transforming fetched data to interface HourlyData
  */
  toWeatherDataArray(response, index: number, data: HourlyData[]){
    for (let i = 0; i < index; i ++){
      let temp: HourlyData;
      temp = {
        time: response.hourly.time[i],
        temperature_2m: response.hourly.temperature_2m[i],
        relativehumidity_2m: response.hourly.relativehumidity_2m[i],
        weathercode: response.hourly.weathercode[i],
        surface_pressure: response.hourly.surface_pressure[i],
        windspeed_10m: response.hourly.windspeed_10m[i]
      }
        temp.weathercode = this.transferWeatherCode(temp.weathercode);
        data.push(temp);
     }
     return data;
  }
  /*  
    weatherCode transforming for images in html
  */
  transferWeatherCode(weatherCode) {
    switch (weatherCode) {
      case 0:
        weatherCode = 1;
        break;
      case 1:
      case 2:
      case 3:
        //clear
        weatherCode = 2;
        break;
      case 45:
      case 48:
        //fog
        weatherCode = 3;
        break;
      case 51:
      case 53:
      case 55:
      case 56:
      case 57:  
        //drizzle & freezing drizzle
        weatherCode = 4;
        break;
      case 61:
      case 63:
      case 65:
        //rain
        weatherCode = 5;
        break;
      case 66:
      case 67:
        //freezing rain
        weatherCode = 6;
        break;
      case 71:
      case 73:
      case 75:
        //snowfall
        weatherCode = 7;
        break;
      case 77:
        //snow grains
        weatherCode = 8;
        break;  
      case 80:
      case 81:
      case 82:
        //rain shower
        weatherCode = 9;
        break;
      case 85:
      case 86:
        //snow shower
        weatherCode = 10;
        break;
      case 95:
        //thunderstorm - slight
        weatherCode = 11;
        break;
      case 96:
      case 99:
        //thunderstorm - heavy
        weatherCode = 12;
        break;
      default: weatherCode = 0;
    }
    return weatherCode;
  }
}