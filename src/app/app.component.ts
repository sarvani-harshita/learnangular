import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learnangular';

  newItemEvent1(eve){
    console.log('eve: ', eve);
  }
}
