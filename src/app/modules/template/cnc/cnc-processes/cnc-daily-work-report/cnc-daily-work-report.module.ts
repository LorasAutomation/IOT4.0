import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CncDailyWorkReportRoutingModule } from './cnc-daily-work-report-routing.module';
import { CncDailyWorkReportComponent } from './cnc-daily-work-report.component';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { LoginModalModule } from '../../../../../common/template/modal-login/modal-login.module';
import { LoginModalComponent } from '../../../../../common/template/modal-login/modal-login.component';


@NgModule({
  imports: [
    CommonModule,
    CncDailyWorkReportRoutingModule,
    FormsModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    LoginModalModule
  ],
  declarations: [CncDailyWorkReportComponent],
  entryComponents: [LoginModalComponent]
})
export class CncDailyWorkReportModule { }
