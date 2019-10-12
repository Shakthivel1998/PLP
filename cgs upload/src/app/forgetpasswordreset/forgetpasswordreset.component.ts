import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../Customer';
import { CapgservicesService } from '../capgservices.service';

@Component({
  selector: 'app-forgetpasswordreset',
  templateUrl: './forgetpasswordreset.component.html',
  styles: []
})
export class ForgetpasswordresetComponent implements OnInit {

  private mailId: string;
  customer: Customer;
  constructor(private router: ActivatedRoute, private route: Router, private userService: CapgservicesService) { }

  ngOnInit() {
    this.router.params.subscribe(params => this.mailId = params.mailId);
    console.log(this.mailId);


  }
  resetPassword(newpwd: string, conpwd: string) {
    // tslint:disable-next-line:triple-equals
    if (newpwd != conpwd) {
      alert('confirm password should be same as new password');
    } else {
      this.userService.resetPassword(conpwd, this.mailId).subscribe(data => {
        this.customer = data;
        if (this.customer != null) {
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


