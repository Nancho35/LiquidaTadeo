import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer">
  <div class="container">
  <div class="content has-text-centered">
    <p>
      Made with 💕 by <a href="https://twitter.com/nancho35">Hernan Garcia</a>
    </p>
  </div>
  </div>
  </footer>
`
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
