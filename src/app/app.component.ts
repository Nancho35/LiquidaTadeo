import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './shared/animations';

@Component({  
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [slider] // register the animation
})
export class AppComponent { 
  
  constructor() {

  }
  ngOnInit(): void {
  
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
