import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../config/config.service';

@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html',
  styleUrls: ['./header-inner.component.css']
})
export class HeaderInnerComponent implements OnInit {

  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.configService.logoutUser().subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
}

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 675 || document.documentElement.scrollTop > 675) {
    document.getElementById("cod-brand").style.fontSize = "18px";
    document.getElementById("cod-header").style.backgroundColor = "rgba(89,56,32,1)";
    document.getElementById("cod-header").style.boxShadow = "0px 2px 5px #000";
  } else {
    document.getElementById("cod-brand").style.fontSize = "24px";
    document.getElementById("cod-header").style.backgroundColor = "";
    document.getElementById("cod-header").style.boxShadow = "";
  }
}

