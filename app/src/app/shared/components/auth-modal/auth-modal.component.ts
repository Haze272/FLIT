import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit {
  @Output() onCloseAuth = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onCloseClick() {
    this.onCloseAuth.emit();
  }
}
