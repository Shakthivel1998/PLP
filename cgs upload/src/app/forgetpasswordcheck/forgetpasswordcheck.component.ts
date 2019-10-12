import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { Router } from '@angular/router';
import { CapgservicesService } from '../capgservices.service';

@Component({
  selector: 'app-forgetpasswordcheck',
  templateUrl: './forgetpasswordcheck.component.html',
  styles: []
})
export class ForgetpasswordcheckComponent implements OnInit {

  customer: Customer;
  constructor(private userService: CapgservicesService, private router: Router) { }

  ngOnInit() {

  }
  checkCustomer(checkData: string) {
    this.userService.detailsValidation(checkData).subscribe(data => {
      console.log(data);
      this.customer = data;

      if (this.customer != null) {
        setTimeout(() => {
          this.router.navigateByUrl('forgotpasswordreset/' + checkData);
        }, 200);
      } else {
        alert('enter valid emailId');
      }
    }, (err) => alert('please enter the emailId'));
  }
}
