import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../login';
import { CapgservicesService } from '../capgservices.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerslogin',
  templateUrl: './customerslogin.component.html',
  styleUrls: ['./customerslogin.component.css']
})
export class CustomersloginComponent implements OnInit {
  login: Login;
  response: boolean;
  constructor(private signupService: CapgservicesService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  cuslogin(value) {
    this.login = value;
    this.signupService.login(this.login).subscribe(data => {
      this.response = data;
      this.authService.storeCustomer(data);
    }, error => {
      console.log(error);
      alert('Invalid login credentials');
      this.authService.logOut();
    });
    setTimeout(() => {
      if (!this.authService.retriveStatus()) {
        this.router.navigate(['/validateuser']);
      } else {
        this.router.navigate(['/homepage']);
      }
      // console.log(this.response);
    }, 500);
  }
  merlogin(value) {
    this.login = value;
    this.signupService.merchantlogin(this.login).subscribe(data => {
      this.response = data;
      this.authService.storeMerchant(data);
      this.router.navigate(['/homepage']);
    }, error => {
      console.log(error);
      alert('Invalid login credentials');
      this.authService.logOut();
    });
    setTimeout(() => {
      // console.log(this.response);
    }, 500);
  }
}
