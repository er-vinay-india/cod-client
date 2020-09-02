import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-left',
  templateUrl: './product-left.component.html',
  styleUrls: ['./product-left.component.css']
})
export class ProductLeftComponent implements OnInit {

  @Input() item:any;
  myThumbnail: any;
  myFullresImage: any;

  constructor() { }

  ngOnInit(): void {
    this.myThumbnail = "assets/img/1.png";
    this.myFullresImage = "assets/img/1-zoom.png";
  }

}
