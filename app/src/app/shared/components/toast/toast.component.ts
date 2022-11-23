import { Component, OnInit } from '@angular/core';
import {ToastService} from "../../services/toast.service";
import {Subscription} from "rxjs";
import {IToast} from "../../models/toast.interface";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  toasts: IToast[] = [];
  toastsSub!: Subscription;

  constructor(
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.toastsSub = this.toastService.getNotifications().subscribe((toast: IToast) => {
      this.toasts.push(toast);
      setTimeout(() => {
        this.closeToast(toast);
      }, 1300);
    });
  }

  public closeToast(toast: IToast) {
    this.toasts.splice(this.toasts.indexOf(toast), 1);
  }
}
