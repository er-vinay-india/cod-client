import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
   // email: new FormControl(''),
    //password: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {

  }

  addUser() {
    this.profileForm.patchValue({
      firstName: 'Devu'
    });
  }

}
