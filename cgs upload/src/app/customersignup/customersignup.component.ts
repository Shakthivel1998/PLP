import { Component, OnInit } from '@angular/core';
import { CapgservicesService } from './../capgservices.service';
import { Customer } from './../Customer';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-customersignup',
  templateUrl: './customersignup.component.html',
  styleUrls: ['./customersignup.component.css']
})
export class CustomersignupComponent implements OnInit {
  constructor(private signupService: CapgservicesService) { }
  user: Customer;

  ngOnInit() {
  }

  add(value) {
    this.user = value;
    this.signupService.signupUser(this.user);
    alert('Successfully created');
  }

}
