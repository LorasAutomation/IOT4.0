import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { BasicTemplateModule } from '../../common/template/basic-template.module';

@NgModule({
  imports: [
    CommonModule,
    TemplateRoutingModule,
    BasicTemplateModule
  ],
  declarations: [TemplateComponent]
})
export class TemplateModule { }
