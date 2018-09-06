import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<h1>Displayed using template property.</h1>
              <p>Its been written over multiple lines.</p>`,
  styles: [`
  
  p { font-weight: bold; }
  h1 { color: red; }
  
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
