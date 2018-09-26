import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CncProcessesRoutingModule } from './cnc-processes-routing.module';
import { CncProcessesComponent } from './cnc-processes.component';
import { TabsModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    CncProcessesRoutingModule,
    TabsModule.forRoot()
  ],
  declarations: [CncProcessesComponent]
})
export class CncProcessesModule { }
