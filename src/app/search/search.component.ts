import { SearchdataService, AccyDet } from './../services/data/searchdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchdataService: SearchdataService) { }

  dataReceived = '';
  seriesSelected: string = '';
  mdlSelected: string = '';
  mdlyrSelected: string = ''
  serieslist: string[] = []
  mdlyrlist: string[] = []
  mdlcdlist: string[] = []
  accycdlist: AccyDet[] = []
  accyselList: string[] = []
  sales:any[] = []
  Accycodessel:string[]=[]
  //NGX Chart Data
  resultsFound:boolean
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Accessory ';
  showYAxisLabel = true;
  yAxisLabel = 'Sales Volume';
  view: any[] = [ 800,600];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };


  ngOnInit(): void {
    this.resultsFound = false 
    this.getseriesDatafromService();

  }

  getseriesDatafromService() {

    this.searchdataService.executeGetSeriesDataService().subscribe(
      Response => this.handleSuccessfulSeriesServiceResponse(Response))
  }

  getmdlyrDatafromService() {

    this.searchdataService.executeGetModelyrDataService(this.seriesSelected).subscribe(
      Response => this.handleSuccessfulMdlyrServiceResponse(Response))
  }

  getmdlcdDatafromService() {

    this.searchdataService.executeGetModelcdDataService(this.seriesSelected, this.mdlyrSelected).subscribe(
      Response => this.handleSuccessfulMdlServiceResponse(Response))
  }

  getAccycdDatafromService() {

    this.searchdataService.executeGetAccyDetDataService(this.seriesSelected, this.mdlyrSelected, this.mdlSelected).subscribe(
      Response => this.handleSuccessfulAccyServiceResponse(Response))
  }

  getreportDatafromService(){
    this.searchdataService.executeGetAccySalesService(this.seriesSelected, this.mdlyrSelected, this.mdlSelected,this.Accycodessel).subscribe(
      response => this.handleSuccessfulreportServiceResponse(response)
    )
  }

  handleSuccessfulreportServiceResponse(Response) {
    this.sales = Response;
  }

  handleSuccessfulSeriesServiceResponse(Response) {
    this.serieslist = Response;
  }

  handleSuccessfulMdlyrServiceResponse(Response) {
    this.mdlyrlist = Response;
  }


  handleSuccessfulMdlServiceResponse(Response) {
    this.mdlcdlist = Response;
  }

  handleSuccessfulAccyServiceResponse(Response) {
    this.accycdlist = Response;
  }

  handleErrorSeriesService() {

  }

  //Handlers from UI

  getModelyrs(s: any) {
    console.log(s);
    this.seriesSelected = s;
    this.mdlcdlist = [];
    console.log('series selected : ', this.seriesSelected);
    this.getmdlyrDatafromService();
    console.log(this.seriesSelected, ' --> mdl yrs ', this.mdlyrlist);

  }

  getModelCd(mdlyr: string) {
    this.mdlyrSelected = mdlyr;
    console.log('Mdl yr  selected : ', this.mdlyrSelected);
    this.getmdlcdDatafromService();
  }

  getAccyCd(mdlsel: string) {
    this.mdlSelected = mdlsel;
    this.getAccycdDatafromService()
  }

  saveAccyCd(AccyList: string[]) {
    this.accyselList = AccyList;
  }

  generateReport() {
    console.log(`generate report is called with ${this.seriesSelected} ${this.mdlyrSelected} ${this.mdlSelected}
      ${this.Accycodessel}`)      
      this.getreportDatafromService()
      this.resultsFound = true 
  }
}
