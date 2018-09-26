import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyChecklistReportRoutingModule } from './daily-checklist-report-routing.module';
import { DailyChecklistReportComponent } from './daily-checklist-report.component';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { LoginModalModule } from '../../../../../common/template/modal-login/modal-login.module';
import { LoginModalComponent } from '../../../../../common/template/modal-login/modal-login.component';


@NgModule({
  imports: [
    CommonModule,
    DailyChecklistReportRoutingModule,
    FormsModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    LoginModalModule
  ],
  declarations: [DailyChecklistReportComponent],
  entryComponents: [LoginModalComponent]
})
export class DailyChecklistReportModule { }
