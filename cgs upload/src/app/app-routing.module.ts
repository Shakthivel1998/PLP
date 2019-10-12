import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersignupComponent } from './customersignup/customersignup.component';
import { MerchantsignupComponent } from './merchantsignup/merchantsignup.component';
import { CustomersloginComponent } from './customerslogin/customerslogin.component';
import { ValidateUserComponent } from './validate-user/validate-user.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
    {path: 'customersignup', component: CustomersignupComponent},
    {path: 'merchantsignup', component: MerchantsignupComponent},
    {path: 'login', component: CustomersloginComponent},
    {path: 'validateuser', component: ValidateUserComponent},
    {path: 'homepage', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
