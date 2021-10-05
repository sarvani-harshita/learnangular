import { Component, EventEmitter, OnInit, Output ,Input} from '@angular/core';

@Component({
  selector: 'app-homechild',
  templateUrl: './homechild.component.html',
  styleUrls: ['./homechild.component.scss']
})
export class HomechildComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  @Input() arr;
  constructor() { }
  ipdata=''
  ngOnInit() {
    console.log(this.arr);
  }

  onsubmit(){
    debugger
    this.newItemEvent.emit(this.ipdata);
  }

}
