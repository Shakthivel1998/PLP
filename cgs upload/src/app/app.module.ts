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
import { ValidateUserComponent } from './validate-user/validate-user.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ForgetpasswordcheckComponent } from './forgetpasswordcheck/forgetpasswordcheck.component';
import { ForgetpasswordresetComponent } from './forgetpasswordreset/forgetpasswordreset.component';
import { ChangepasswordcheckComponent } from './changepasswordcheck/changepasswordcheck.component';
import { ChangepasswordresetComponent } from './changepasswordreset/changepasswordreset.component';
import { MerchantforgotpasswordcheckComponent } from './merchantforgotpasswordcheck/merchantforgotpasswordcheck.component';
import { MerchantforgotpasswordresetComponent } from './merchantforgotpasswordreset/merchantforgotpasswordreset.component';
import { MerchantchangepasswordcheckComponent } from './merchantchangepasswordcheck/merchantchangepasswordcheck.component';
import { MerchantchangepasswordresetComponent } from './merchantchangepasswordreset/merchantchangepasswordreset.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersignupComponent,
    MerchantsignupComponent,
    CustomersloginComponent,
    ValidateUserComponent,
    HomepageComponent,
    ForgetpasswordcheckComponent,
    ForgetpasswordresetComponent,
    ChangepasswordcheckComponent,
    ChangepasswordresetComponent,
    MerchantforgotpasswordcheckComponent,
    MerchantforgotpasswordresetComponent,
    MerchantchangepasswordcheckComponent,
    MerchantchangepasswordresetComponent
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
