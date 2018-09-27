import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floor-view',
  templateUrl: './floor-view.component.html',
  styleUrls: ['./floor-view.component.css']
})
export class FloorViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public doughnutChartLabels:string[] = ['UP', 'DOWN'];
  public doughnutChartData:number[] = [85, 15];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartOptions:any = {
    responsive: true,
    legend:{
      display: false
    }
  };

  public doughnutChartColors:Array<any> = [
   {
     backgroundColor:['green','red']
   }
  ]
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
