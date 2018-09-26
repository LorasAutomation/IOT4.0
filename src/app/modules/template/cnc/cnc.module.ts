import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CncRoutingModule } from './cnc-routing.module';
import { CncComponent } from './cnc.component';


@NgModule({
  imports: [
    CommonModule,
    CncRoutingModule
  ],
  declarations: [CncComponent]
})
export class CncModule { }
