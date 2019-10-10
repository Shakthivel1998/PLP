import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Login } from '../login';
import { CapgservicesService } from '../capgservices.service';

@Component({
  selector: 'app-customerslogin',
  templateUrl: './customerslogin.component.html',
  styleUrls: ['./customerslogin.component.css']
})
export class CustomersloginComponent implements OnInit {
login: Login;
  constructor(private signupService: CapgservicesService) { }

  ngOnInit() {
  }
  cuslogin(value) {
    this.login = value;
    this.signupService.login(this.login);

  }
  merlogin(value) {
    this.login = value;
    this.signupService.login(this.login);
  }
}
