import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CncListRoutingModule } from './cnc-list-routing.module';
import { CncListComponent } from './cnc-list.component';
import { PaginationModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    CncListRoutingModule,
    PaginationModule.forRoot()
  ],
  declarations: [CncListComponent]
})
export class CncListModule { }
