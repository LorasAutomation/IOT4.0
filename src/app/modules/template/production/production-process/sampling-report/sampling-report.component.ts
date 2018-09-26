import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sampling-report',
  templateUrl: './sampling-report.component.html',
  styleUrls: ['./sampling-report.component.css']
})
export class SamplingReportComponent implements OnInit {

  shiftModel = 'shift1';
  pageModel = 'page-1';
  constructor() { }

  ngOnInit() {
  }

}
