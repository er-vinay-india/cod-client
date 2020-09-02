import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfigService } from './../config/config.service';
import { Router } from '@angular/router';

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
    private configService: ConfigService,
    private router: Router
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
        let response = data;
        if(response && response['result'].user_guid) {
          
          localStorage.setItem('seedAuth', response['result'].user_guid);
          localStorage.setItem('isLoggedIn', 'true');
          
          if(response['result'].user.is_admin) {
            localStorage.setItem('isAdmin', 'true');
          }
          
          this.router.navigate(['/']).then(function() {
            window.location.reload(true);
          });
        } else {
          alert("Invalid Response");
        }
      },
      () => {
      }
    );
  }

}
