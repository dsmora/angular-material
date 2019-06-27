import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
}
