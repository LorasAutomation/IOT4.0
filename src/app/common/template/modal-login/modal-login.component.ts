import { OnInit, Component } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap";

@Component({
    selector: 'modal-content',
    template: `
      <div class="modal-header">
        <h4 class="modal-title pull-left">Login</h4>
        <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="form-group">
        <label class="font-weight-bold" for="exampleFormControlSelect1">Username</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option selected disabled>Select</option>
          <option>Harish</option>
          <option>Suresh</option>
          <option>Mahesh</option>
          <option>Rajesh</option>
          <option>Ajesh</option>
        </select>
      </div>
      <div class="mt-4"></div>
      <div class="font-weight-bold">Password</div>
      <label for="inputPassword1" class="sr-only">Password</label>
      <input type="password" id="inputPassword1" class="form-control" placeholder="Password" required>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" type="submit">Sign in</button>
        <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">Cancel</button>
      </div>
    `
  })
  export class LoginModalComponent implements OnInit {
    title: string;
    closeBtnName: string;
    list: any[] = [];
   
    constructor(public bsModalRef: BsModalRef) {}
   
    ngOnInit() {

    }
  }