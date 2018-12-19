import { Component, OnInit, ViewChild } from '@angular/core';
import { Line } from '../../models/line';
import { Machine } from '../../models/machine';
import { SortableComponent } from 'ngx-bootstrap';
@Component({
  selector: 'app-floor-view',
  templateUrl: './floor-view.component.html',
  styleUrls: ['./floor-view.component.css']
})
export class FloorViewComponent implements OnInit {

  constructor() { }

  lineList : Line[] = [];
  machineList: Machine[] = [];
  showAddMachine:boolean;

  ngOnInit() {
    this.lineList = [new Line('Line 1')];
    this.machineList = [new Machine('Machine 1'), new Machine('Machine 2'), new Machine('Machine 3'), new Machine('Machine 4'), new Machine('Machine 5')];
  }
  @ViewChild(SortableComponent) sortableComponent: SortableComponent;
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

  public addMachine(){
    this.machineList.push(new Machine("Machine 6"));
    this.sortableComponent.writeValue(this.machineList);
    console.log(this.machineList)
  }

}
