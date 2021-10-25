
import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-without',
  templateUrl: './without.component.html',
  styleUrls: ['./without.component.scss']
})
export class WithoutComponent implements OnInit {

  data: Array<any> = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    console.time('data loaded');
    this.data = this.dataService.data;
    setTimeout(this.initiateReorganize.bind(this), 500);
  }

  ngAfterViewChecked(): void {
    const now: Date = new Date();
    const difference: number = now.getTime() - this.dataService.startTime.getTime();
    console.log('difference: ', difference);
  }

  initiateReorganize = (): void => {
    const min: number = 0;
    const max: number = this.dataService.iterations - 1;
    for (let i = 0, len = this.dataService.iterations; i < len; i++) {
      const a: number = this.dataService.getRandomInt(min, max);
      const b: number = this.dataService.getRandomInt(min, max);
      [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
    }
  };
}
