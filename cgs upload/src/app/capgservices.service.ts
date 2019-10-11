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
  email: string;
  password: string;
  customer: Customer;
  response: Customer;
  constructor(private http: HttpClient) {
  }
login(user: Login): Observable<boolean> {
  this.email = user.email;
  this.password = user.password;
  return this.http.post<boolean>('http://localhost:6500/customerlogin?email=' + this.email + '&password=' + this.password, user);
}
merchantlogin(user: Login) {
  this.email = user.email;
  this.password = user.password;
  return this.http.post<boolean>('http://localhost:6500/merchantlogin?email=' + this.email + '&password=' + this.password, user);
}
setCustomer(customer) {
  this.customer = customer;
}

getCustomer() {
  return this.customer;
}
signupUser(user: Customer): Observable<boolean> {
  return this.http.post<boolean>('http://localhost:6500/customersignup', user);
}
signupMerchant(merchant: Merchant): Observable<boolean> {
  return this.http.post<boolean>('http://localhost:6500/merchantsignup', merchant);
}
}
