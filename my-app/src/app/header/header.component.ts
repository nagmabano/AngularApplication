import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  message: string = "Interpolation message!!!!";
  title: string = "Property Binding";
  clickMessage: string = "";

  onClick(){
    this.clickMessage = "Event Binding";
  }
}


