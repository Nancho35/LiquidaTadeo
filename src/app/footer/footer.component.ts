import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer">
  <div class="left">

  <a href="https://www.facebook.com/derecho.utadeo"  target="_blank">
      <img src="assets/face.png" width="30px" height="30px"/></a>

  <a href="https://www.instagram.com/utadeo.edu.co/?hl=es-la" target="_blank">
      <img src="assets/inst.png" width="30px" height="30px" /></a>

  <a href="https://twitter.com/derechoutadeo" target="_blank">
      <img src="assets/tw.png" width="30px" height="30px" /></a>

    <p>
      Made with 💕 by <a href="https://twitter.com/nancho35"  target="_blank">Hernan Garcia</a>
    </p>
  </div>
  </footer>
`
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
