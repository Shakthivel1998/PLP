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
  constructor(private signupService: CapgservicesService, private router: Router) { }

  ngOnInit() {
  }
  add(value) {
    this.merchant = value;
    this.signupService.signupMerchant(this.merchant);
    alert('Successfully created');
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}
