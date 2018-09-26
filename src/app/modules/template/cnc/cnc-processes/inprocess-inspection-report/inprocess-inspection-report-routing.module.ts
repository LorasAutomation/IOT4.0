import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InprocessInspectionReportComponent } from './inprocess-inspection-report.component';

const routes: Routes = [{
  path:'',
  component:InprocessInspectionReportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InprocessInspectionReportRoutingModule { }
