import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  @Output() public onAuthClicked = new EventEmitter();

  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  public onClickAuth() {
    this.onAuthClicked.emit();
  }

  @Input() isChecked: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
}
