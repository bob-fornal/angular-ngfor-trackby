import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  iterations: number = 1000;
  dataPoints: number = 10000;
  data: Array<any> = [];

  startTime: Date;

  constructor() {
    this.startTime = new Date();
    this.init();
  }

  init = (): void => {
    for (let i = 0, len = this.dataPoints; i < len; i++) {
      const datum: any = { index: i, identifier: this.makeid() };
      this.data.push(datum);
    }
  };

  makeid = (length: number = 50): string => {
    var result: string = '';
    var characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
  };

  getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

}
