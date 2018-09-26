import { Injectable } from '@angular/core';
import { Menu } from '../template/sidenav/model/menu';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  displayMenu: Menu[] = [];
  
  constructor(private router: Router, private activatedRoute:ActivatedRoute) { 

  }
  
  refreshTheView(){
    this.getAllMenuData();	
  }
  
  getAllMenuData(){
    this.displayMenu = [
      new Menu('Dashboard', 'fas fa-tachometer-alt', false, [], '/dashboard', false),
      new Menu('Floor View', 'fas fa-th-list', false, [], '/floor-view', false),
      new Menu('Injection Moulding', 'fas fa-cogs', false, [], '/production', false),
      new Menu('Cnc', 'fas fa-tablet-alt', false, [], '/cnc', false)
    ];
  }
}
