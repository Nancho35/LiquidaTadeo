import { Component } from '@angular/core';
import { fadeAnimation } from './shared/animations';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [fadeAnimation] // register the animation
})
export class AppComponent { 
  
  constructor() {

  }
  ngOnInit(): void {
  
  }
}
