import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forecastData } from '../models/forecastModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor( private http: HttpClient ) { }
  /*  
    API for future forecast
  */
  fetchData():Observable<forecastData> {
    return this.http.get<forecastData>('https://api.open-meteo.com/v1/forecast?latitude=51.5002&longitude=-0.1262&hourly=temperature_2m,relativehumidity_2m,weathercode,surface_pressure,windspeed_10m')
  }
  /*  
    API for  weather history
  */
  fetchDataHistory():Observable<forecastData> {
    return this.http.get<forecastData>('https://api.open-meteo.com/v1/forecast?latitude=51.5002&longitude=-0.1262&hourly=temperature_2m,relativehumidity_2m,weathercode,surface_pressure,windspeed_10m&past_days=14')
  }
}
