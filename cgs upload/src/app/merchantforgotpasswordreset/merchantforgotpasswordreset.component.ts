import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Merchant } from '../merchantsignup/merchant';
import { CapgservicesService } from '../capgservices.service';

@Component({
  selector: 'app-merchantforgotpasswordreset',
  templateUrl: './merchantforgotpasswordreset.component.html',
  styles: []
})
export class MerchantforgotpasswordresetComponent implements OnInit {


  private email: string;
  merchant: Merchant;
  constructor(private router: ActivatedRoute, private route: Router, private userService: CapgservicesService) { }

  ngOnInit() {
    this.router.params.subscribe(params => this.email = params.email);
    console.log(this.email);


  }
  resetPassword(newpwd: string, conpwd: string) {
    // tslint:disable-next-line:triple-equals
    if (newpwd != conpwd) {
      alert('confirm password should be same as new password');
    } else {
      this.userService.resetMerchantPassword(conpwd, this.email).subscribe(data => {
        this.merchant = data;
        if (this.merchant != null) {
          alert('Your password has been successfully updated. A mail has been sent to your Mailid');

        }
      }, (err) => alert('please enter the password')


      );
      setTimeout(() => {
        this.route.navigate(['/login']);
      }, 500);
    }
  }

}
