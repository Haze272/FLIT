import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit {
  @Output() onCloseAuth = new EventEmitter;
  modalType: ModalType = ModalType.logIn;

  constructor() { }

  ngOnInit(): void {
  }

  onCloseClick() {
    this.onCloseAuth.emit();
  }

  modalSignIn() {
    this.modalType = ModalType.signIn;
  }

  modalLogIn() {
    this.modalType = ModalType.logIn;
  }

  modalForgotPassword() {
    this.modalType = ModalType.forgotPassword;
  }
}

export enum ModalType {
  logIn,
  signIn,
  forgotPassword
}
