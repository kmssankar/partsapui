import { Mydata, pastFiveYear, lowsalesData } from './home.data';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }
  user=''
  userLogged='guest';
  highmodelAccySales: any[] = Mydata;
  lowModelAccySales: any[] = lowsalesData;
  dipAccySales:any[]=Mydata;
  pastFiveYear:any[]=pastFiveYear;
  view: any[] = [550, 300];

  // options
  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Model/Accy';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'sales volume';
  legendTitle: string = 'Years';
  timeline: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  ngOnInit(): void {
    this.userLogged = this.activatedRoute.snapshot.params['name']

  }


}
