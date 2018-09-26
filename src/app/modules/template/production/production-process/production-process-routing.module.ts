import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductionProcessComponent } from './production-process.component';

const routes: Routes = [{
  path:'',
  component: ProductionProcessComponent,
  children: [{
    path: '',
    redirectTo: 'injection-moulding-report'
  },{
    path:'injection-moulding-report',
    loadChildren: './injection-moulding-report/injection-moulding-report.module#InjectionMouldingReportModule'
  },{
    path:'route-card',
    loadChildren: './route-card/route-card.module#RouteCardModule'
  },{
    path:'machine-parameter-chart',
    loadChildren: './injection-moulding-parameters/injection-moulding-parameters.module#InjectionMouldingParametersModule'
  },{
    path:'sampling-report',
    loadChildren: './sampling-report/sampling-report.module#SamplingReportModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionProcessRoutingModule { }
