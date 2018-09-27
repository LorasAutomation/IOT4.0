import { Injectable } from '@angular/core';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { UserBasicInfo } from '../model/user-basic-info';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  logoUrl: string;
  sideNavOpen = true;
  alerts: any[] = [];
  userInfo= new UserBasicInfo();
	loading = false;
	sideNavHovered=false;

  constructor() {
    this.logoUrl = '../../../../assets/Images/logo.png';
  }

  toggleSideNav() {
		this.sideNavOpen = !this.sideNavOpen;
		this.sideNavHovered=false;
  }
    
  setUserBasicInfo(empId:string, orgId:string){
  	this.userInfo.employeeId = empId;
  	this.userInfo.orgId = orgId;
  }
  
  copyVariables(selectedObject: any, editedObject: any){
  	let keys: string[] = Object.keys(selectedObject);
  	for(let key of keys){
  		editedObject[key] = selectedObject[key]
  	}
  	return editedObject;
  }
  
  	addAlert(type: string, message:string): void {
	    this.alerts.push({
	      type: type,
	      msg: message,
	      timeout: 2000
	    });
	}
	
 	onClosed(dismissedAlert: AlertComponent): void {
    	this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  	}
  	
  	showLoader(){
  		this.loading = true;
  	}
  	
  	hideLoader(){
  		this.loading = false;
  	}

}
