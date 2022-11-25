import {Component, OnDestroy, OnInit} from '@angular/core';
import {TaskService} from "../../shared/services/task.service";
import {ITask} from "../../shared/models/task.interface";
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../shared/models/user.interface";
import {RankService} from "../../shared/services/rank.service";
import {IRank} from "../../shared/models/rank.interface";
import {ToastService} from "../../shared/services/toast.service";
import {AuthService} from "../../shared/services/auth.service";
import {Subscription} from "rxjs";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
  providers: [TaskService]
})
export class TaskDetailComponent implements OnInit, OnDestroy {
  task!: ITask;
  taskAuthor!: IUser;
  taskAuthorRank!: IRank;
  nextRankExp!: number;

  isLogged: boolean = false;
  loginFlagSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private rankService: RankService,
    private toastService: ToastService,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    let prodId: number = parseInt(this.route.snapshot.params['taskId']);
    this.task = this.taskService.getProductById(prodId);
    this.taskAuthor = this.taskService.getMockUserById(this.task.id) as IUser;
    this.taskAuthorRank = this.rankService.getMockCustomerRankById(this.taskAuthor.rank);
    this.nextRankExp = this.rankService.getNextRankExp(this.taskAuthor.rank);
    this.loginFlagSub = this.authService.isLogged$.subscribe((loginFlag) => {
      this.isLogged = loginFlag;
    })
  }

  getAge() {
    return this.userService.getAge(this.taskAuthor.dateOfBirth)
  }

  ageText() {
    return this.userService.ageText(this.getAge());
  }

  respond() {
    if (this.isLogged) {
      // TODO
    } else {
      this.toastService.showToast({
        type: "error",
        message: "Вам необходимо авторизироваться, чтобы добавить в избранное!"
      })
    }
  }

  ngOnDestroy() {
    this.loginFlagSub.unsubscribe();
  }
}
