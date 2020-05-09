import { Component, Input } from '@angular/core';

function isEven(n) {
  n = Number(n);
  return n === 0 || !!(n && !(n%2));
}


/*@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})*/
export class AppComponent {
  title = 'finals';
}
