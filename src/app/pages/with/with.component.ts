
import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-with',
  templateUrl: './with.component.html',
  styleUrls: ['./with.component.scss']
})
export class WithComponent implements OnInit {

  data: Array<any> = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.data = this.dataService.data;
  }

  identify = (index: number, item: any): string => item.index;
  
}
