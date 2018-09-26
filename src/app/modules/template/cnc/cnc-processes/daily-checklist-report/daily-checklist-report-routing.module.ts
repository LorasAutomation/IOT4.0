import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyChecklistReportComponent } from './daily-checklist-report.component';

const routes: Routes = [{
  path:'',
  component: DailyChecklistReportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyChecklistReportRoutingModule { }
