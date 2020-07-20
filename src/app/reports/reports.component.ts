import { Component, OnInit } from '@angular/core';

export class car {
  constructor(public brand: string, public model: string, public version: string) { }
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor() { }
  cars: car[] = [new car('Toyota', 'corolla Altis', 'GD'), new car('Volkswagen', 'Jetta', 'Highline'),
  new car('BMW', '3 Series', '320D')
  ]
  ngOnInit(): void {
  }
}
