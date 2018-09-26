import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { LoginModalComponent } from '../../../../../common/template/modal-login/modal-login.component';

@Component({
  selector: 'app-injection-moulding-report',
  templateUrl: './injection-moulding-report.component.html',
  styleUrls: ['./injection-moulding-report.component.css']
})
export class InjectionMouldingReportComponent implements OnInit {

  shiftModel = 'shift1';
  bsModalRef: BsModalRef;
  
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  
  loginCheck(){
    this.bsModalRef = this.modalService.show(LoginModalComponent,Object.assign({}, { class: 'gray modal-sm' }));
  }

}
