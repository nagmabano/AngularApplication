import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() childMessage: string;

  message:string = "message from child component to parent component!!!";
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  onClickSend(){
    this.messageEvent.emit(this.message)
  }

}
