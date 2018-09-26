import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { LoginModalComponent } from '../../../../../../common/template/modal-login/modal-login.component';

@Component({
  selector: 'app-sr-page2',
  templateUrl: './sr-page2.component.html',
  styleUrls: ['./sr-page2.component.css']
})
export class SrPage2Component implements OnInit {

  items : any[]=[{}];
  bsModalRef: BsModalRef;
  
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  
  loginCheck(){
    this.bsModalRef = this.modalService.show(LoginModalComponent,Object.assign({}, { class: 'gray modal-sm' }));
  }

}
