import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FloorViewComponent } from './floor-view.component';

const routes: Routes = [
  {
    path: '',
    component: FloorViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloorViewRoutingModule { }
