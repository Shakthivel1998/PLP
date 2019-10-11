import { Component, OnInit } from '@angular/core';
import { Merchant } from './merchant';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
import { CapgservicesService } from '../capgservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-merchantsignup',
  templateUrl: './merchantsignup.component.html',
  styleUrls: ['./merchantsignup.component.css']
})
export class MerchantsignupComponent implements OnInit {
  merchant: Merchant;
  response: boolean;
  constructor(private signupService: CapgservicesService, private router: Router) { }

  ngOnInit() {
  }
  add(value) {
    this.merchant = value;
    this.signupService.signupMerchant(this.merchant).subscribe(data => this.response = data);
    setTimeout(() => {
      console.log(this.response);
      if (!this.response) {
        alert('Email id already exists');
      } else {
        alert('Successfully created');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000);
      }
    }, 500);
  }
}
