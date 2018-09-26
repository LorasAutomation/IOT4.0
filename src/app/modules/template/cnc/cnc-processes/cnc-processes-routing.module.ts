import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CncProcessesComponent } from './cnc-processes.component';

const routes: Routes = [{
  path:'',
  component:CncProcessesComponent,
  children:[{
    path:'',
    redirectTo: 'check-list-report'
  },{
    path:'daily-work-report',
    loadChildren: './cnc-daily-work-report/cnc-daily-work-report.module#CncDailyWorkReportModule'
  },{
    path:'cam-sheet',
    loadChildren: './cam-sheet/cam-sheet.module#CamSheetModule'
  },{
    path:'check-list-report',
    loadChildren: './daily-checklist-report/daily-checklist-report.module#DailyChecklistReportModule'
  },{
    path:'inprocess-inspection-report',
    loadChildren: './inprocess-inspection-report/inprocess-inspection-report.module#InprocessInspectionReportModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CncProcessesRoutingModule { }
