import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InjectionMouldingReportComponent } from './injection-moulding-report.component';

const routes: Routes = [
  {path: '', component: InjectionMouldingReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InjectionMouldingReportRoutingModule { }
