import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  storeCustomer(data) {
    localStorage.setItem('customerId', data.CustomerID);
    localStorage.setItem('customeremail', data.email);
  }

  storeMerchant(data) {
    localStorage.setItem('merchantId', data.merchantID);
    localStorage.setItem('merchantemail', data.email);
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
}
