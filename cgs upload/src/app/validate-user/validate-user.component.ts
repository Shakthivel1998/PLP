import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CapgservicesService } from '../capgservices.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-validate-user',
  templateUrl: './validate-user.component.html',
  styleUrls: ['./validate-user.component.css']
})
export class ValidateUserComponent implements OnInit {
  customeremail: string;
  constructor(private service: CapgservicesService, private router: Router, private authenticate: AuthService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.customeremail = this.authenticate.retriveemail();
    console.log(this.customeremail);
    this.service.validate(this.customeremail).subscribe(data => console.log(data));
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 500);
  }
}
