import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../common/services/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { GlobalService } from '../../common/services/global.service';
import { TemplateService } from '../../common/services/template.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router, 
  		public globalService: GlobalService, private templateService: TemplateService) { }

  ngOnInit() {
  }

  login() {
     this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '';
        /* let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };*/
        // this.router.navigate([redirect], navigationExtras);
        this.templateService.refreshTheView();
        this.router.navigate(["/"]);
      }
    });
  }

}
