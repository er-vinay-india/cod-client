import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfigService } from './../config/config.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  authForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let post_data = {
      email: this.authForm.value.email,
      password: this.authForm.value.password
    };

    this.configService.loginUser(post_data).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}
