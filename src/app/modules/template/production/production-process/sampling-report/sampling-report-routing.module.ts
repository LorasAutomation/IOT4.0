import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamplingReportComponent } from './sampling-report.component';
import { SrPage1Component } from './sr-page1/sr-page1.component';
import { SrPage2Component } from './sr-page2/sr-page2.component';

const routes: Routes = [
  {
    path: '', 
    component: SamplingReportComponent,
    children: [{
      path:'', 
      redirectTo:'sr-page1'
    },{
      path: 'sr-page1',
      component: SrPage1Component
    },{
      path: 'sr-page2',
      component: SrPage2Component
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplingReportRoutingModule { }
