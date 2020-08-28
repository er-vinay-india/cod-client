import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {

  @Input() product: any; 

  constructor() { }

  ngOnInit(): void {
    console.log('we are here');
    console.log(this.product);
  }

}
