import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InjectionMouldingParametersRoutingModule } from './injection-moulding-parameters-routing.module';
import { InjectionMouldingParametersComponent } from './injection-moulding-parameters.component';
import { FormsModule } from '@angular/forms';
import { ButtonsModule, ModalModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { LoginModalModule } from '../../../../../common/template/modal-login/modal-login.module';
import { LoginModalComponent } from '../../../../../common/template/modal-login/modal-login.component';

@NgModule({
  imports: [
    CommonModule,
    InjectionMouldingParametersRoutingModule,
    FormsModule,
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    LoginModalModule
  ],
  declarations: [InjectionMouldingParametersComponent],
  entryComponents: [LoginModalComponent]
})
export class InjectionMouldingParametersModule { }
