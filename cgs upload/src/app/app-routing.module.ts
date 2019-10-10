import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersignupComponent } from './customersignup/customersignup.component';
import { MerchantsignupComponent } from './merchantsignup/merchantsignup.component';
import { CustomersloginComponent } from './customerslogin/customerslogin.component';

const routes: Routes = [
    {path: 'customersignup', component: CustomersignupComponent},
    {path: 'merchantsignup', component: MerchantsignupComponent},
    {path: 'login', component: CustomersloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
