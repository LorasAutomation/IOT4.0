import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-process',
  templateUrl: './alert-process.component.html',
  styleUrls: ['./alert-process.component.css']
})
export class AlertProcessComponent implements OnInit {

  sms:boolean;
  email:boolean;
  operator:number;

  constructor() { }

  ngOnInit() {
    this.email=false;
    this.sms=false;
  }

}
