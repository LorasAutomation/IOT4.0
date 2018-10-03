import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertRoutingModule } from './alert-routing.module';
import { AlertComponent } from './alert.component';
import { AlertListComponent } from './alert-list/alert-list.component';
import { AlertProcessComponent } from './alert-process/alert-process.component';
import { PaginationModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AlertRoutingModule,
    PaginationModule.forRoot(),
    FormsModule
  ],
  declarations: [AlertComponent, AlertListComponent, AlertProcessComponent]
})
export class AlertModule { }
