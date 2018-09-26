import { Component, OnInit } from '@angular/core';
import { LoginModalComponent } from '../../../../../common/template/modal-login/modal-login.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-injection-moulding-parameters',
  templateUrl: './injection-moulding-parameters.component.html',
  styleUrls: ['./injection-moulding-parameters.component.css']
})
export class InjectionMouldingParametersComponent implements OnInit {
  shiftModel = 'shift1';
  bsModalRef: BsModalRef;
  
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  
  loginCheck(){
    this.bsModalRef = this.modalService.show(LoginModalComponent,Object.assign({}, { class: 'gray modal-sm' }));
  }


}
