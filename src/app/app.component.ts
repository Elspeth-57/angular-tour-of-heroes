import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // CSS and HTML element selector
  templateUrl: './app.component.html', // HTML template file location
  styleUrls: ['./app.component.css'] // CSS private styles file location
})
export class AppComponent {
  title = 'Tour of Heroes'; // property - can be accessed in the template with interpolation
}
