import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { LoginRoutingModule } from './modules/login/login-routing.module';
import { AppRoutingModule} from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPipe } from './pipes/all-pipes.module';
import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CustomAlertComponent } from './common/alert-component/alert-component.component';
import { LoaderComponent } from './common/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomAlertComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    LoginRoutingModule,
    ButtonsModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    MainPipe,
    BrowserAnimationsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
