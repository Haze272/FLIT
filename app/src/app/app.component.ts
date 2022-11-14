import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public isSidenavToggled: boolean = false;
  isAuthToggled: boolean = false;

  sidenavToggle() {
    this.isSidenavToggled = !this.isSidenavToggled;
  }

  authToggle() {
    this.isAuthToggled = !this.isAuthToggled;
  }
}
