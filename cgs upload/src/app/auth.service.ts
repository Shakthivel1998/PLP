import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  storeCustomer(data) {
    localStorage.setItem('customerId', data.CustomerID);
    localStorage.setItem('customeremail', data.email);
    localStorage.setItem('role', data.role);
    localStorage.setItem('isActive', data.isActive);
  }

  storeMerchant(data) {
    localStorage.setItem('merchantId', data.merchantId);
    localStorage.setItem('email', data.email);
    localStorage.setItem('role', data.role);
    localStorage.setItem('isActive', data.isActive);
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('customerId') != null) {
      return true;
    } else {
      return false;
    }
  }
  logOut() {
    localStorage.removeItem('customerId');
    localStorage.removeItem('customeremail');
  }
  retriveemail() {
    return localStorage.getItem('customeremail');
  }
  retriveStatus() {
    return JSON.parse(localStorage.getItem('isActive'));
  }
}
