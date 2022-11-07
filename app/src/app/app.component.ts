import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public isToggled: boolean = false;

  toggle() {
    this.isToggled === true ? this.isToggled = false : this.isToggled = true;
  }
}
