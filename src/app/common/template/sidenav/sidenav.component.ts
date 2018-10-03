import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { TemplateService } from '../../services/template.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ transform: 'translateX(-100%)', opacity: 0 }),
          animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate('10ms', style({ transform: 'translateX(-100%)', opacity: 0 }))
        ])
      ]
    )
  ]
})
export class SidenavComponent implements OnInit {

  constructor(public globalService: GlobalService, public templateService: TemplateService, private route: Router) { }

  ngOnInit() {
  }

  menuClicked(menu) {
    if (menu.hasSubMenu) {
      menu.isExpanded = !menu.isExpanded;
    }
  }

  navigate(data) {
    this.route.navigate([data]);
  }

}
