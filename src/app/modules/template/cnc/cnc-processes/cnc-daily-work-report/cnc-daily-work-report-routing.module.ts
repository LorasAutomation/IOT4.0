import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CncDailyWorkReportComponent } from './cnc-daily-work-report.component';

const routes: Routes = [{
  path: '',
  component: CncDailyWorkReportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CncDailyWorkReportRoutingModule { }
