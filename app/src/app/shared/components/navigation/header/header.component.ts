import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {IUser} from "../../../models/user.interface";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  @Output() public onAuthClicked = new EventEmitter();
  @Input() isChecked: boolean = false;
  user$ = this.authService.currentUser$;
  user!: IUser;

  constructor(public authService: AuthService) {
    this.authService.currentUser$.subscribe({next:(data: IUser) => this.user = data});
  }

  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  public onClickAuth() {
    this.onAuthClicked.emit();
  }

  ngOnInit(): void {
  }
}

