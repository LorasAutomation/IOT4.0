import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloorViewRoutingModule } from './floor-view-routing.module';
import { FloorViewComponent } from './floor-view.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  imports: [
    CommonModule,
    FloorViewRoutingModule,
    AccordionModule.forRoot()
  ],
  declarations: [FloorViewComponent]
})
export class FloorViewModule { }
