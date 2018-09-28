import { Injectable } from '@angular/core';
import { Menu } from '../template/sidenav/model/menu';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import {
  faCoffee, faStickyNote, faUserCog, faPaperPlane, faFileAlt, faUsers,
  faChartLine, faCalendarAlt, faListUl, faPlusSquare, faAngleUp
} from '@fortawesome/fontawesome-free-solid';
import fontawesome from '@fortawesome/fontawesome';
import { faBars, faTimes } from '@fortawesome/fontawesome-free-solid';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  displayMenu: Menu[] = [];
  
  constructor(private router: Router, private activatedRoute:ActivatedRoute) { 
    fontawesome.library.add(faBars, faTimes,faCoffee, faStickyNote, faUserCog, faPaperPlane, faFileAlt, faUsers,
      faChartLine, faCalendarAlt, faListUl, faPlusSquare, faAngleUp);
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
