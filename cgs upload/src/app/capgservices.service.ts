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
  private userUrl = 'http://localhost:6500/';
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
validate(customeremail: string): Observable<any> {
  return this.http.put<any>('http://localhost:6500/validateuser?email=' + customeremail, this.customer);
}
detailsValidation(mailid: string) {
  return this.http.get<Customer>(this.userUrl + 'change/' + mailid);

}
resetPassword(resetPwd: string, mailId: string) {
  return this.http.get<Customer>(this.userUrl + 'reset/' + resetPwd + '/' + mailId);
}
changepwdDetailsValidation(mailid: string) {
  return this.http.get<Customer>(this.userUrl + 'check/' + mailid );

}

merchantDetailsValidation(email: string) {
  console.log(email);
  return this.http.get<Merchant>(this.userUrl + 'merchantchange/' + email);
}
resetMerchantPassword(resetpwd: string, email: string) {
  return this.http.get<Merchant>(this.userUrl + 'resetMerchant/' + resetpwd + '/'  + email );
}
changeMerchantPwdDetailsValidation(email: string) {
  return this.http.get<Merchant>(this.userUrl + 'checkMerchant?email=' + email);
}
}
