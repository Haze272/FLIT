import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {UserService} from "../../../services/user.service";
import {IUser} from "../../../models/user.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: []
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() public sidenavToggle = new EventEmitter();
  @Output() public onAuthClicked = new EventEmitter();
  @Input() isChecked: boolean = false;

  isLogged: boolean = false;
  currentUser!: IUser;

  loginFlagSub!: Subscription;
  userSub!: Subscription;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}


  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  public onClickAuth() {
    this.onAuthClicked.emit();
  }

  ngOnInit(): void {
    this.loginFlagSub = this.authService.isLogged$.subscribe((loginFlag) => {
      this.isLogged = loginFlag;
    })

    this.userSub = this.userService.getUser().subscribe((user) => {
      this.currentUser = user;
    })
  }

  ngOnDestroy() {
    this.loginFlagSub.unsubscribe();
    this.userSub.unsubscribe();
  }
}

