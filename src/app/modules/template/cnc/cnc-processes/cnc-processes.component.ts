import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-cnc-processes',
  templateUrl: './cnc-processes.component.html',
  styleUrls: ['./cnc-processes.component.css']
})
export class CncProcessesComponent implements OnInit {
  @ViewChild('cncProcess') onBoardTabs: TabsetComponent;
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
    	if(route.url.toString() != "/cnc/new-cnc-process/"){
        let url = route.url.toString().split('/');
        this.actualRoute= url[url.length-2]== "new-cnc-process"?url[url.length-1] : url[url.length-2];
    	}else{
    		this.actualRoute = this.startOfPath;
    	}
    });
  }

    goToComponent(route: string) {
      this.router.navigate(['cnc/new-cnc-process/' + route]);
    }
}
