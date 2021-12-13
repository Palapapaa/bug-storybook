import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @Input()
  param: any;

  ngOnInit(): void {
    // On init the parameter is an object (as it should be)
    console.log(this.param);

    window.setTimeout(() => {
      // No longer an object
      console.log(this.param);
    }, 1000);
  }

  ngAfterViewInit(): void {
    // Still an object
    console.log(this.param);
  }

  alertParamType() {
    console.log(this.param);
    alert(typeof this.param);
  }
}
