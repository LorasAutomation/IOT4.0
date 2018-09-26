import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template.component';

const routes: Routes = [ 
  { path: '', 
    component: TemplateComponent,
    children: [
      {
        path: '',
        children: [
           { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
           { path: 'production', loadChildren: './production/production.module#ProductionModule' },
           { path: 'cnc', loadChildren: './cnc/cnc.module#CncModule' },
           { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
           { path: 'floor-view', loadChildren: './floor-view/floor-view.module#FloorViewModule' }
        ]
      }
    ]
  }
 ] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
