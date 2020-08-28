import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../config/config.service';

@Component({
  selector: 'app-upcoming-box',
  templateUrl: './upcoming-box.component.html',
  styleUrls: ['./upcoming-box.component.css']
})
export class UpcomingBoxComponent implements OnInit {

  upcomingProducts: any;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.getUpcomingProducts();
  }

  getUpcomingProducts() {
    this.configService.getUpcomingProducts()
    .subscribe(
      (data) => {
        this.upcomingProducts = data;
      }
    );
  }
}
