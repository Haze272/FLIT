import {Injectable, OnDestroy, OnInit} from "@angular/core";
import {IToast} from "../models/toast.interface";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToastService implements OnInit, OnDestroy {
  constructor() {
  }

  ngOnInit(): void {
  }

  private notifications: Subject<IToast> = new Subject<IToast>();

  public getNotifications(): Subject<IToast> {
    return this.notifications;
  }

  public showToast(info: IToast) {
    this.notifications.next(info);
  }

  ngOnDestroy(): void {
  }
}
