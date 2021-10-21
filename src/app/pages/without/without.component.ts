
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
    this.data = this.dataService.data;
  }

}
