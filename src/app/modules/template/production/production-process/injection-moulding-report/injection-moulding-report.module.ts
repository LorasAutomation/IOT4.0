import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InjectionMouldingReportRoutingModule } from './injection-moulding-report-routing.module';
import { InjectionMouldingReportComponent } from './injection-moulding-report.component';
import { FormsModule } from '@angular/forms';
import { ButtonsModule, ModalModule } from 'ngx-bootstrap';
import { LoginModalModule } from '../../../../../common/template/modal-login/modal-login.module';
import { LoginModalComponent } from '../../../../../common/template/modal-login/modal-login.component';

@NgModule({
  imports: [
    CommonModule,
    InjectionMouldingReportRoutingModule,
    FormsModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    LoginModalModule
  ],
  declarations: [InjectionMouldingReportComponent],
  entryComponents: [LoginModalComponent]
})
export class InjectionMouldingReportModule { }
