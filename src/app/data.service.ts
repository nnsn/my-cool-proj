import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = [
    'Ford', 'Buick', 'Maruti'
  ];

  myData() {
    return 'This is my data.';
  }
}
