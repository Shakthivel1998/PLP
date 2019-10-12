import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Merchant } from '../merchantsignup/merchant';
import { CapgservicesService } from '../capgservices.service';

@Component({
  selector: 'app-merchantforgotpasswordcheck',
  templateUrl: './merchantforgotpasswordcheck.component.html',
  styles: []
})
export class MerchantforgotpasswordcheckComponent implements OnInit {

  merchant: Merchant;
  constructor(private userService: CapgservicesService, private router: Router) { }

  ngOnInit() {
  }
  checkMerchant(checkData: string) {


    this.userService.merchantDetailsValidation(checkData).subscribe(data => {
      console.log(data);
      this.merchant = data;

      if (this.merchant != null) {
        console.log(this.merchant.email);
        setTimeout(() => {
          this.router.navigateByUrl('merchantforgotpasswordreset/' + this.merchant.email);
        }, 200);

      } else {
        alert('enter valid emailId');
      }
    }, (err) => alert('Enter valid emailId'));

  }

}


