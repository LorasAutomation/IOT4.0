import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductionComponent } from './production.component';
import { ProductionListComponent } from './production-list/production-list.component';

const routes: Routes = [
  { path: '', 
    component: ProductionComponent,
    children: [{
      path:'',
      redirectTo: 'production-list'
    },{
      path:'production-list',
      component:ProductionListComponent
    },{
      path:'new-production',
      loadChildren: './production-process/production-process.module#ProductionProcessModule'
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRoutingModule { }
