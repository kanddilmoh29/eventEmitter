import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() buttonClicked = new EventEmitter();

onClick() {
    this.buttonClicked.emit('This value is comming from the child component when button clicked!!');
  }

}
