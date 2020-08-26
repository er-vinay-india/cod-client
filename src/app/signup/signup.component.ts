import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfigService } from './../config/config.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  user;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {

  }

  adduser() {
    this.signupForm.patchValue({
      firstName: "Devu",
      lastName: "Shivhare",
      email: "divyanshu.shivhare32@gmail.com"
    });
  }

  onSubmit() {
    alert(this.signupForm.value.password);
  }

  getUserDetails() {
    this.configService.getUserDetails()
    .subscribe(
      (data) => this.user
    );

    console.log(this.user);
  }

}
