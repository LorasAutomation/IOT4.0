import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InprocessInspectionReportRoutingModule } from './inprocess-inspection-report-routing.module';
import { InprocessInspectionReportComponent } from './inprocess-inspection-report.component';
import { FormsModule } from '@angular/forms';
import { ButtonsModule, ModalModule } from 'ngx-bootstrap';
import { LoginModalModule } from '../../../../../common/template/modal-login/modal-login.module';
import { LoginModalComponent } from '../../../../../common/template/modal-login/modal-login.component';


@NgModule({
  imports: [
    CommonModule,
    InprocessInspectionReportRoutingModule,
    FormsModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    LoginModalModule
  ],
  declarations: [InprocessInspectionReportComponent],
  entryComponents: [LoginModalComponent]
})
export class InprocessInspectionReportModule { }
