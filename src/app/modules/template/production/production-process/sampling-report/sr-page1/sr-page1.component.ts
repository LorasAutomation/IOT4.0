import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { LoginModalComponent } from '../../../../../../common/template/modal-login/modal-login.component';

@Component({
  selector: 'app-sr-page1',
  templateUrl: './sr-page1.component.html',
  styleUrls: ['./sr-page1.component.css']
})
export class SrPage1Component implements OnInit {
  bsModalRef: BsModalRef;
  
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  
  loginCheck(){
    this.bsModalRef = this.modalService.show(LoginModalComponent,Object.assign({}, { class: 'gray modal-sm' }));
  }


}
