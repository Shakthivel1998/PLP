import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapgservicesService } from './capgservices.service';
import { CustomersignupComponent } from './customersignup/customersignup.component';
import { MerchantsignupComponent } from './merchantsignup/merchantsignup.component';
import { CustomersloginComponent } from './customerslogin/customerslogin.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersignupComponent,
    MerchantsignupComponent,
    CustomersloginComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    FormsModule
  ],
  providers: [CapgservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
