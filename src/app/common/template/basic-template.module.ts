import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ]
})

export class BasicTemplateModule { }