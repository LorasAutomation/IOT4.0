import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloorViewRoutingModule } from './floor-view-routing.module';
import { FloorViewComponent } from './floor-view.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { SortableModule } from 'ngx-bootstrap/sortable';
@NgModule({
  imports: [
    CommonModule,
    FloorViewRoutingModule,
    AccordionModule.forRoot(),
    ChartsModule,
    SortableModule.forRoot(),
    FormsModule
  ],
  declarations: [FloorViewComponent]
})
export class FloorViewModule { }
