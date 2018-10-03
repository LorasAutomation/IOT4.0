import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingComponent } from './setting.component';
import { AuthGuard } from '../../../guards/auth-guard.service';

const routes: Routes = [{
  path: '',
  canActivate: [AuthGuard],
  component: SettingComponent,
  children: [{
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'alert', pathMatch: 'full' },
      { path: 'alert', loadChildren: './alert/alert.module#AlertModule' },
      { path: 'maintenance', loadChildren: './maintenance/maintenance.module#MaintenanceModule' }
    ]
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
