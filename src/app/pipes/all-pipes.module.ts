import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { EscapeHtmlPipe } from "./keep-html.pipe";
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations:[ EscapeHtmlPipe, SafePipe ],
  imports:[ CommonModule ],
  exports:[ EscapeHtmlPipe, SafePipe ]
})

export class MainPipe{}