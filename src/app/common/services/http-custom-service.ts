import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { STDJsonResponse } from '../model/STDjsonResp';
import { CustomAlertComponent } from '../alert-component/alert-component.component';
import { GlobalService } from './global.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCustomService {

  url = 'http://localhost:1211/';
  alert = new CustomAlertComponent();
  
  constructor(private http: HttpClient, private globalService: GlobalService) {
  }

  doGet(mapping: string): any{
  	this.globalService.showLoader();
  	return this.http.get( this.url + mapping )
  			.pipe(
				retry(3),
  				map( (res:STDJsonResponse) => {
  					this.globalService.hideLoader();
					if(!res.header.haserror){
						res = res.body.payload;
	  					return res;
					}else{
						this.globalService.addAlert('danger', res.header.errorMessage);
					}
			 	}),
  					catchError((err, caught) => {
  					   this.globalService.hideLoader();
  					   this.globalService.addAlert('danger', 'Internal Server Error');
			           return of(err);
			         })
  				);
  }
  
  doPost(url: string, postObj: any): any{
  	this.globalService.showLoader();
  	const httpOptions = { 
  				headers: new HttpHeaders({'Content-Type':  'application/json','Authorization': 'my-auth-token'})
  			};
  	
  	return this.http.post(this.url + url, postObj, httpOptions)
			.pipe(
				retry(3),
  				map( (res:STDJsonResponse) => {
  					this.globalService.hideLoader();
					if(!res.header.haserror){
						res = res.body.payload;
	  					return res;
					}else{
						this.globalService.addAlert('danger', res.header.errorMessage);
					}
				}),
  					catchError((err, caught) => {
  					   this.globalService.hideLoader();
  					   this.globalService.addAlert('danger', 'Internal Server Error');
			           return of(err);
			         })
  				);
  }
  
}
