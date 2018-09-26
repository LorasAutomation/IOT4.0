import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteCardComponent } from './route-card.component';

const routes: Routes = [{
  path:'',
  component: RouteCardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteCardRoutingModule { }
