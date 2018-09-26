import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginModalComponent } from './modal-login.component';

@NgModule({
  declarations:[
    LoginModalComponent 
  ],
  imports:[ 
  	CommonModule, 
  	RouterModule, 
    FormsModule
    ],
  exports:[
      LoginModalComponent
  	]
})

export class LoginModalModule {}