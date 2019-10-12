import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../Customer';
import { CapgservicesService } from '../capgservices.service';

@Component({
  selector: 'app-changepasswordcheck',
  templateUrl: './changepasswordcheck.component.html',
  styles: []
})
export class ChangepasswordcheckComponent implements OnInit {

  customer: Customer;
  constructor(private userService: CapgservicesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  checkChangePwd(checkData: string) {
    this.userService.changepwdDetailsValidation(checkData).subscribe(data => {
      console.log(data);
      this.customer = data;

      if (this.customer != null) {
        setTimeout(() => {
          this.router.navigateByUrl('changepasswordreset/' + checkData);
        }, 200);
      } else {
        alert('enter valid emailId');
      }
    }, (err) => alert('please enter the emailId'));

  }


}
