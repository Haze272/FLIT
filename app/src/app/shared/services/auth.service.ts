import { Injectable } from '@angular/core';
import {IUser} from "../models/user.interface";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {CurrentUserService} from "./current-user.service";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = new BehaviorSubject(false);
  public isLogged$: Observable<boolean> = this.isLogged.asObservable();

  constructor(
    private currentUserService: CurrentUserService,
    private userService: UserService
  ) {
  }

  login(login: string, password: string): boolean {
    for (let user of this.userService.getUsers()) {
      if ((user.email === login || user.login === login) && (user.password === password)) {
        this.currentUserService.setUser(user);
        console.log('Пользователь ' + user.login + ' был авторизован');

        this.isLogged.next(true);

        return true
      }
    }
    console.log('Пользователь не был авторизован');
    return false;
  }
}
