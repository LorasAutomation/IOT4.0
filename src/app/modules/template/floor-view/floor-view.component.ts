import { Component, OnInit } from '@angular/core';
import { Line } from '../../models/line';
import { Machine } from '../../models/machine';

@Component({
  selector: 'app-floor-view',
  templateUrl: './floor-view.component.html',
  styleUrls: ['./floor-view.component.css']
})
export class FloorViewComponent implements OnInit {

  constructor() { }

  lineList : Line[] = [];
  machineList: Machine[] = [];

  ngOnInit() {
    this.lineList = [new Line('Line 1')];
    this.machineList = [new Machine('Machine 1'), new Machine('Machine 2'), new Machine('Machine 3'), new Machine('Machine 4'), new Machine('Machine 5')];
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
