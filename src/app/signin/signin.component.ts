import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfigService } from './../config/config.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from '../storage.service';

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

  return: string = '';

  constructor(
    private configService: ConfigService,
    private router: Router,
    private route: ActivatedRoute,
    private storageService: StorageService 
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/');
  }

  onSubmit() {
    let post_data = {
      email: this.authForm.value.email,
      password: this.authForm.value.password
    };

    this.configService.loginUser(post_data).subscribe(
      (data) => {
        let response = data;
        if(response && response['result']) {

          this.storageService.setAuthInfo(response['result']);
          this.router.navigateByUrl(this.return).then(function() {
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
