import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  message:string;

  constructor() { }

  parentMessage = "message from parent component to child component";

  getMessage($event){
    this.message = $event;
  }

}
