import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CncComponent } from './cnc.component';

const routes: Routes = [{
  path:'',
  component: CncComponent,
  children:[
    {
      path: '', redirectTo: 'cnc-list'
    },{
      path:'cnc-list',
      loadChildren: './cnc-list/cnc-list.module#CncListModule'
    },{
      path:'new-cnc-process',
      loadChildren: './cnc-processes/cnc-processes.module#CncProcessesModule'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CncRoutingModule { }
