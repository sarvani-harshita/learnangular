import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() newItemEvent1 = new EventEmitter<string>();
  arr = [1,2,3,4,5,6];
  homeevent: any;

  constructor() { }

  ngOnInit() {
  }

  newItemEvent(event){
    debugger
    this.homeevent = event
    console.log('event: ', event);
    this.newItemEvent1.emit(this.homeevent);

  }
  submithome(){
    this.newItemEvent1.emit(this.homeevent);
  }

}
