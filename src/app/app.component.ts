import { Component, OnInit } from '@angular/core';
import { GlobalService } from './common/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

	constructor(public globalService: GlobalService){}
	
	ngOnInit(){
	}
}
