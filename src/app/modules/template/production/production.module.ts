import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionRoutingModule } from './production-routing.module';
import { ProductionComponent } from './production.component';
import { ProductionListComponent } from './production-list/production-list.component';
import { PaginationModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ProductionRoutingModule,
    PaginationModule.forRoot()
  ],
  declarations: [ProductionComponent, ProductionListComponent]
})
export class ProductionModule { }
