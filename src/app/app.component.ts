import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { ConfigService } from './config/config.service';
import { slideInAnimation, fader } from './animation';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'Crazy Over Donuts';
  headerType = 'default'; // 3 types [ default, inner, legal ]
  isLoggedIn = false;
  isAdmin = false;

  constructor(
    private router: Router,
    private configService: ConfigService,
    private storageService: StorageService
  ) {
    router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() )

    if(configService.isAdmin()) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }

    if(configService.isLoggedIn()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  handleRouteChange = () => {
    if (this.router.url.includes('legal/')) {
      this.headerType = 'legal';
    } else if (this.router.url == '/') {
      this.headerType = 'default'

      // When the user scrolls down 50px from the top of the document, resize the header's font size
      window.onscroll = function() { scrollFunction() };

      function scrollFunction() {
        if (document.body.scrollTop > 675 || document.documentElement.scrollTop > 675) {
          document.getElementById("cod-brand").style.fontSize = "18px";
          document.getElementById("cod-header").style.boxShadow = "0px 2px 5px rgba(192,168,134)";
          document.getElementById("cod-header").style.backgroundColor = "rgba(89,56,32,1)";
        } else {
          document.getElementById("cod-brand").style.fontSize = "24px";
          document.getElementById("cod-header").style.backgroundColor = "";
          document.getElementById("cod-header").style.boxShadow = "";
        }
      }
    } else {
      this.headerType = 'inner';
    }
  };

  logout() {
    this.storageService.removeAuthInfo().subscribe(
      (data) => {
        if(data['status'] = 'success') {
          this.storageService.removeAuthInfoLocal()
        }
      }
    );
  }
}
