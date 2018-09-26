import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-production-process',
  templateUrl: './production-process.component.html',
  styleUrls: ['./production-process.component.css']
})
export class ProductionProcessComponent implements OnInit {

  @ViewChild('productionProcess') onBoardTabs: TabsetComponent;
  actualRoute: string;
  startOfPath: string;

  constructor(private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.firstChild.url.subscribe(params => {
      this.startOfPath = params[0].path;
      this.actualRoute = params[0].path;
    });
    
	this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
    ).subscribe((route: ActivatedRoute) => {
    	if(route.url.toString() != "/production/new-production/"){
        let url = route.url.toString().split('/');
        this.actualRoute= url[url.length-2]== "new-production"?url[url.length-1] : url[url.length-2];
    	}else{
    		this.actualRoute = this.startOfPath;
    	}
    });
  }

    goToComponent(route: string) {
      this.router.navigate(['production/new-production/' + route]);
    }
  }
