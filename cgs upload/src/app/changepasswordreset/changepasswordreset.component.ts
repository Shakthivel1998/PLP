import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CapgservicesService } from '../capgservices.service';

@Component({
  selector: 'app-changepasswordreset',
  templateUrl: './changepasswordreset.component.html',
  styles: []
})
export class ChangepasswordresetComponent implements OnInit {

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

        } else {
          alert('New password and Current password cannot be same');
        }
      }, (err) => alert('Please enter the password')

      );
      setTimeout(() => {
        this.route.navigate(['/login']);
      }, 500);
    }
  }
}


