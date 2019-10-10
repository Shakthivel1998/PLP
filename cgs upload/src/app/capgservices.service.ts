import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http';
import { Customer } from './Customer';
import { Login } from './login';
import { Merchant } from './merchantsignup/merchant';

@Injectable({
  providedIn: 'root'
})
export class CapgservicesService {
  customer: Customer;
  constructor(private http: HttpClient) { }
login(user: Login) {
   this.http.post('', user).toPromise().then((data) => console.log(data));
}
setCustomer(customer) {
  this.customer = customer;
}

getCustomer() {
  return this.customer;
}
signupUser(user: Customer) {
  this.http.post('http://localhost:6500/customersignup', user).toPromise().then((data) => console.log(data));
}
signupMerchant(merchant: Merchant) {
  this.http.post('http://localhost:6500/merchantsignup', merchant).toPromise().then(data => console.log(data));
}
}
