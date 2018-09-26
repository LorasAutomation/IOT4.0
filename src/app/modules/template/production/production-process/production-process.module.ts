import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionProcessRoutingModule } from './production-process-routing.module';
import { ProductionProcessComponent } from './production-process.component';
import { TabsModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ProductionProcessRoutingModule,
    TabsModule.forRoot()
  ],
  declarations: [ProductionProcessComponent]
})
export class ProductionProcessModule { }
