import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'],
  providers: []
})
export class CalcComponent implements OnInit {

  submitButton = document.querySelector(".submit");
  value = document.querySelector(".value");

  constructor(private formBuilder: FormBuilder) {  }

  profileForm = this.formBuilder.group({
    degree: [''],
    degreeValue: [],
    humidity: []
  });

  ngOnInit(): void {}
  
  
  event() {
    console.log(this.profileForm.value.degreeValue);
    if(true){
      alert('ahoj')
    }
  }
  


}
