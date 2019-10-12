import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Merchant } from '../merchantsignup/merchant';
import { CapgservicesService } from '../capgservices.service';

@Component({
  selector: 'app-merchantchangepasswordcheck',
  templateUrl: './merchantchangepasswordcheck.component.html',
  styles: []
})
export class MerchantchangepasswordcheckComponent implements OnInit {

  merchant: Merchant;
  constructor(private userService: CapgservicesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  checkMerchantChangePwd(checkData: string) {
    this.userService.changeMerchantPwdDetailsValidation(checkData).subscribe(data => {
      console.log(data);
      this.merchant = data;

      if (this.merchant != null) {
        setTimeout(() => {
          this.router.navigateByUrl('merchantchangepasswordreset/' + this.merchant.email);
        }, 200);
      } else {
        alert('enter valid emailId');
      }
    }, (err) => alert('Enter valid emailId'));

  }

}
