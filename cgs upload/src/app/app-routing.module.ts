import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
    {path: 'customersignup', component: CustomersignupComponent},
    {path: 'merchantsignup', component: MerchantsignupComponent},
    {path: 'login', component: CustomersloginComponent},
    {path: 'validateuser', component: ValidateUserComponent},
    {path: 'homepage', component: HomepageComponent},
    {path: 'forgotpasswordcheck', component: ForgetpasswordcheckComponent},
    {path: 'forgotpasswordreset/:mailId' , component: ForgetpasswordresetComponent},
    {path: 'changepasswordcheck' , component: ChangepasswordcheckComponent},
    {path: 'changepasswordreset/:mailId' , component: ChangepasswordresetComponent},
    {path: 'merchantforgotpasswordcheck', component: MerchantforgotpasswordcheckComponent},
    {path: 'merchantforgotpasswordreset/:email', component: MerchantforgotpasswordresetComponent},
    {path: 'merchantchangepasswordcheck', component: MerchantchangepasswordcheckComponent},
    {path: 'merchantchangepasswordreset/:email', component: MerchantchangepasswordresetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
