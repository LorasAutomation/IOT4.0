import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InjectionMouldingParametersComponent } from './injection-moulding-parameters.component';

const routes: Routes = [
  { path: '', component: InjectionMouldingParametersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InjectionMouldingParametersRoutingModule { }
