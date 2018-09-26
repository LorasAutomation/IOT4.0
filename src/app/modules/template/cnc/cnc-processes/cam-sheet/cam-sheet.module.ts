import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamSheetRoutingModule } from './cam-sheet-routing.module';
import { CamSheetComponent } from './cam-sheet.component';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    CamSheetRoutingModule,
    FormsModule,
    ButtonsModule.forRoot()
  ],
  declarations: [CamSheetComponent]
})
export class CamSheetModule { }
