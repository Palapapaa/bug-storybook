import { Component } from '@angular/core';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.css']
})
export class BugComponent {

  param = {
    first: 'first',
    second: 'second',
    third: 'third'
  }
}
