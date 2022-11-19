import { Injectable } from '@angular/core';
import {IUser} from "../models/user.interface";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: BehaviorSubject<IUser> = new BehaviorSubject({} as IUser);

  setUser(user: IUser) {
    this.user.next(user);
  }

  getUser() {
    return this.user.asObservable();
  }

  constructor() { }
}
