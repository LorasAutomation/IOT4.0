import { Component, OnInit } from '@angular/core';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-alert-component',
  templateUrl: './alert-component.component.html',
  styleUrls: ['./alert-component.component.css']
})
export class CustomAlertComponent implements OnInit {

	constructor(public globalService?: GlobalService) { }

	ngOnInit() {
	
	}
	
}
