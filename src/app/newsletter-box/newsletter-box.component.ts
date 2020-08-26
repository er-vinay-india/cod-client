import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-newsletter-box',
  templateUrl: './newsletter-box.component.html',
  styleUrls: ['./newsletter-box.component.css']
})
export class NewsletterBoxComponent implements OnInit {

  newsletterForm = new FormGroup({
    email: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
