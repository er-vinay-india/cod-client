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

  user: any;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    let post_data = {
      first_name: this.signupForm.value.firstName,
      last_name: this.signupForm.value.lastName,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    };

    this.configService.registerUser(post_data).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
}
