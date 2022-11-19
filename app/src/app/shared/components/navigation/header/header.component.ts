import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {IUser} from "../../../models/user.interface";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: []
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  @Output() public onAuthClicked = new EventEmitter();
  @Input() isChecked: boolean = false;
  isLogged: boolean = false;

  constructor(private authService: AuthService) {}


  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  public onClickAuth() {
    this.onAuthClicked.emit();
  }

  ngOnInit(): void {
    this.authService.isLogged$.subscribe((val) => {
      this.isLogged = val;
      console.log(this.authService.isLogged$)
    })
  }
}

