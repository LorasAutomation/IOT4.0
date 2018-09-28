import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { TemplateService } from '../../services/template.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  roles: string[] = [];
  
  constructor(public authService: AuthService, public router: Router, 
  public globalService: GlobalService, public templateService:TemplateService ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
