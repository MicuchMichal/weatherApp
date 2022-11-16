import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { localStorageData } from '../models/forecastModel';
@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'],
  providers: []
})

export class CalcComponent {

  result: string = '';
  localStorrageArray: string [] = [];
  lsData: any;

  constructor(private formBuilder: FormBuilder) { 
    this.displayLocalStorage();
  }

  profileForm = this.formBuilder.group({
    degree: [''],
    temperature: [],
    humidity: []
  });
/* 
  function on submit
*/
  event() {
    let temperature = this.profileForm.value.temperature;
    let humidity = this.profileForm.value.humidity;
    let degrees = this.profileForm.value.degree;

    if (!degrees || !temperature ||!humidity){
      alert('Please input all values');
      this.result = null;
      return;
    }
    if((humidity > 100) || (humidity < 0)){
      alert('Humidity must be between 0 and 100');
      this.result = null;
      return;
    }
    if (degrees === 'celsius'){
      if(temperature < 26.7){
        alert('Degree value must be higher than 26.7°C');
        this.result = null;
        return;
      }
      let temp = temperature;
      temp = this.heatIndex((temp*1.8)+32, humidity);
      temp = (temp - 32) * 0.555;
      this.result = `${Math.round(temp)} °C`;
      this.addLocalStorage(`T: ${temperature} °C`,
      ` Hum: ${humidity}%`,` Heat Index: ${this.result}`);
    }
    if (degrees === 'fahrenheit'){
      if(this.profileForm.value.temperature < 80){
        alert('Degree value must be higher than 80°F');
        this.result = null;
        return;
      }
      let temp = temperature;
      temp = this.heatIndex(temp, humidity);
      this.result = `${temp} °F`;
      this.addLocalStorage(`T: ${temperature} °F`,
      ` Hum: ${humidity}%`,` Heat Index: ${this.result}`);
    }
  }
/* 
  heat index calculation
*/
  heatIndex(temp, hum){
    let res = -42.379 + 2.04901523 * temp + 10.14333127 * hum
    - 0.22475541 * temp * hum - 6.83783 * 0.001 * temp * temp
    - 5.481717 * 0.01 * hum * hum + 1.22874 * 0.001 * temp* temp * hum
    + 8.5282 * 0.0001 * temp * hum*hum - 1.99 * 0.000001 * temp * temp * hum*hum;
    res = Math.floor(res);
    return res;
  }
/* 
  heat index calculation
*/
  addLocalStorage(temperature, humidity, result){
    this.lsData.push({
      temperature, 
      humidity, 
      result,
    });
    if (this.lsData.length > 5){
      this.lsData.shift();
    }
    localStorage.setItem('id', JSON.stringify(this.lsData));
    this.displayLocalStorage();
  }
  displayLocalStorage(){
    this.lsData = JSON.parse(localStorage.getItem('id')) || [];
    if (localStorage.length == 0){
      return;
    }
    for(let i = 0; i < this.lsData.length; i++){
      this.localStorrageArray[i] = 
      `${this.lsData[i].temperature}, 
       ${this.lsData[i].humidity}, 
       ${this.lsData[i].result}`
    }
    this.localStorrageArray.reverse();
  }
}

