import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss'],
  providers: []
})
export class AuthModalComponent implements OnInit {
  @Output() onCloseAuth = new EventEmitter;
  modalType: ModalType = ModalType.logIn;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  closeModal() {
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

  login(login: string, password: string) {
    let isSuccesed = this.authService.login(login, password);
    if (isSuccesed) {
      this.closeModal();
    }
  }
}

export enum ModalType {
  logIn,
  signIn,
  forgotPassword
}
