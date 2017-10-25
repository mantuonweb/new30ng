import { Component } from '@angular/core';

class Day{
	cars: number;
	constructor() {
		// code...
	}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  requesttypedata: any[] = [new Day()];
  addMore(){
	  this.requesttypedata.push(new Day())
  }
}
