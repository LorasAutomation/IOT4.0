import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplingReportRoutingModule } from './sampling-report-routing.module';
import { SamplingReportComponent } from './sampling-report.component';
import { SrPage1Component } from './sr-page1/sr-page1.component';
import { SrPage2Component } from './sr-page2/sr-page2.component';
import { FormsModule } from '@angular/forms';
import { ButtonsModule, ModalModule } from 'ngx-bootstrap';
import { LoginModalModule } from '../../../../../common/template/modal-login/modal-login.module';
import { LoginModalComponent } from '../../../../../common/template/modal-login/modal-login.component';

@NgModule({
  imports: [
    CommonModule,
    SamplingReportRoutingModule,
    FormsModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    LoginModalModule
  ],
  declarations: [SamplingReportComponent, SrPage1Component, SrPage2Component],
  entryComponents: [LoginModalComponent]
})
export class SamplingReportModule { }
