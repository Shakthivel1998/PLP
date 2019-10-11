import { Component, OnInit } from '@angular/core';
import { CapgservicesService } from './../capgservices.service';
import { Customer } from './../Customer';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customersignup',
  templateUrl: './customersignup.component.html',
  styleUrls: ['./customersignup.component.css']
})
export class CustomersignupComponent implements OnInit {
  constructor(private signupService: CapgservicesService, private router: Router) { }
  user: Customer;
  response: boolean;
  ngOnInit() {
  }

  add(value) {
    this.user = value;
    this.signupService.signupUser(this.user).toPromise().then(data => this.response = data);
    setTimeout(() => {
      console.log(this.response);
      if (!this.response) {
        alert('Email already exists');
      } else {
        alert('Successfully created');
        setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1000);
      }
    }, 1000);
  }

}
