import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteCardRoutingModule } from './route-card-routing.module';
import { RouteCardComponent } from './route-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouteCardRoutingModule
  ],
  declarations: [RouteCardComponent]
})
export class RouteCardModule { }
