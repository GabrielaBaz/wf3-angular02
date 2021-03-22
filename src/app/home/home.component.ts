import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../models/user';

//The interfaces go here
interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

  //This is created in the constructor
  cities: City[];

  //We have to initialize it with an empty array
  selectedCities: City[]=[];

  constructor() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }

user=new User('Jane Doe',
'https://images.unsplash.com/photo-1492467008961-6e33db522c9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
27,
"You wish you knew my name");

  // constructor() { }

  ngOnInit(): void {
  }

}
