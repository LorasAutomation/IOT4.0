import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { LoginModalComponent } from '../../../../../common/template/modal-login/modal-login.component';

@Component({
  selector: 'app-daily-checklist-report',
  templateUrl: './daily-checklist-report.component.html',
  styleUrls: ['./daily-checklist-report.component.css']
})
export class DailyChecklistReportComponent implements OnInit {
  shiftModel = 'shift1';
  items : any[] = [{}];
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  
  loginCheck(){
    this.bsModalRef = this.modalService.show(LoginModalComponent,Object.assign({}, { class: 'gray modal-sm' }));
  }
 

}
