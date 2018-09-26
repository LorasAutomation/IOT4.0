import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cam-sheet',
  templateUrl: './cam-sheet.component.html',
  styleUrls: ['./cam-sheet.component.css']
})
export class CamSheetComponent implements OnInit {
  shiftModel = 'shift1';
  items : any[] = [{}];
  constructor() { }

  ngOnInit() {
  }

}
