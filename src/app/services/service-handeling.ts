import { Injectable } from '@angular/core';
import { ForecastService } from './forecast.service'
import { HourlyData } from 'src/app/models/forecastModel';
import { Chart, registerables } from 'chart.js';
@Injectable({
  providedIn: 'root'
})

export class serviceHandeling {

  hourlyData?: HourlyData [] = [];
  hourlyDataHistory?: HourlyData [] = [];
  actualWeather?: HourlyData [] = [];
  
  timeFuture: string [] = [];
  temperatureFuture: number [] = [];

  timeHistory: string [] = [];
  temperatureHistory: number [] =[];

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
        this.toWeatherDataArray(response, 72, this.hourlyData, this.timeFuture, this.temperatureFuture);
      }
    });
    return this.hourlyData;
  }
  fetchDataHistory() {
    this.http.fetchDataHistory()
    .subscribe({
      next: (response) => {
        this.toWeatherDataArray(response, 168, this.hourlyDataHistory, this.timeHistory, this.temperatureHistory);
        this.hourlyDataHistory.reverse();
      }
    });
    return this.hourlyDataHistory;
  }
  /*  
    transforming fetched data to interface HourlyData
  */
  toWeatherDataArray(response, index: number, data: HourlyData[], time, temperature){
    for (let i = 0; i < index; i++){
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
      temp.time = this.transferTime(temp.time);
      /*  
        getting actual weather data
      */  
      let actualHour = parseInt(temp.time.substring(8,10)); 
      let actualDay = parseInt(temp.time.substring(0,2));
      let date = new Date();
      if ((actualDay == date.getDate()) && (actualHour == date.getHours())){
        this.actualWeather.push(temp);
      }
      time.push(temp.time);
      temperature.push(temp.temperature_2m);
      data.push(temp);
    }
     return data;
  }
  /*  
    charts
  */
  displayChart(time, temperature, name){
    let chart = new Chart(name, {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: time, 
        datasets: [
          {
            label: "Temperature",
            data: temperature,// values on Y-Axis
            backgroundColor: 'rgba(40, 75, 99, 0.5)',
            borderColor: "rgb(21, 50, 67)",
            fill: true,
            hoverBorderColor: 'black',
            pointBackgroundColor: 'red',
          }, 
        ]
      },
      options: {
        aspectRatio:1.5,
      },
    });
    return chart
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
/*  
  time transforming for html 
*/
  transferTime (time):string {
    const months = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "Jun",
      6: "Jul",
      7: "Aug",
      8: "Sept",
      9: "Oct",
      10: "Nov",
      11: "Dec",
    }
    let outputMonth = time.substring(5,7);outputMonth = months[outputMonth-1];
    let outputDay = time.substring(8,10);
    let outputHour = time.substring(11);

    return `${outputDay}. ${outputMonth} ${outputHour}`;
  }
}