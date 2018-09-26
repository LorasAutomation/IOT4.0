import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../common/services/global.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(public globalService: GlobalService) { }

  ngOnInit() {
  }

  collapseSideNav(){
    if(this.globalService.sideNavOpen)
      this.globalService.sideNavOpen = !this.globalService.sideNavOpen;
  }

}
