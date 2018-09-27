import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloorViewRoutingModule } from './floor-view-routing.module';
import { FloorViewComponent } from './floor-view.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  imports: [
    CommonModule,
    FloorViewRoutingModule,
    AccordionModule.forRoot(),
    ChartsModule
  ],
  declarations: [FloorViewComponent]
})
export class FloorViewModule { }
