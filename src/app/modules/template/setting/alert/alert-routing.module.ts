import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertComponent } from './alert.component';
import { AlertListComponent } from './alert-list/alert-list.component';
import { AlertProcessComponent } from './alert-process/alert-process.component';

const routes: Routes = [{
  path: '',
  component: AlertComponent,
  children: [{
    path: '',
    redirectTo: 'alert-list',
    pathMatch: 'full'
  }, {
    path: 'alert-list',
    component: AlertListComponent
  }]
},{
  path:'new-alert',
  component:AlertProcessComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertRoutingModule { }
