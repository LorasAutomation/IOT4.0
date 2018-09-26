import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { LoginModalComponent } from '../../../../../common/template/modal-login/modal-login.component';

@Component({
  selector: 'app-inprocess-inspection-report',
  templateUrl: './inprocess-inspection-report.component.html',
  styleUrls: ['./inprocess-inspection-report.component.css']
})
export class InprocessInspectionReportComponent implements OnInit {
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
