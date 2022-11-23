import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ITask} from "../../../../shared/models/task.interface";
import {AuthService} from "../../../../shared/services/auth.service";
import {Subscription} from "rxjs";
import {log} from "util";
import {ToastService} from "../../../../shared/services/toast.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy {
  @Input() task!: ITask;
  @Output() onAddedToFavorite: EventEmitter<ITask> = new EventEmitter<ITask>();

  isLogged: boolean = false;
  loginFlagSub!: Subscription;

  addedToFavorite: boolean = false;

  constructor(
    private authService: AuthService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.loginFlagSub = this.authService.isLogged$.subscribe((loginFlag) => {
      this.isLogged = loginFlag;
    })
  }

  toggleFavorite() {
    if (this.isLogged) {
      this.addedToFavorite ? this.addToFavorite() : 0;
      this.addedToFavorite = !this.addedToFavorite;
    } else {
      this.toastService.showToast({
        type: "error",
        message: "Вам необходимо авторизироваться, чтобы добавить в избранное!"
      })
    }
  }

  addToFavorite() {
    this.onAddedToFavorite.emit();
  }

  ngOnDestroy() {
    this.loginFlagSub.unsubscribe();
  }
}
