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

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
  providers: [TaskService, RankService]
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
    private authService: AuthService
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

  getAge(): number {
    let today = new Date();
    let birthDate = new Date(
      this.taskAuthor.dateOfBirth.toISOString().slice(0, 10)
    );
    let age = today.getFullYear() - birthDate.getFullYear();

    let m = today.getMonth() - birthDate.getMonth();
    let d = today.getDay() - birthDate.getDay();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if ( age === 0 ) {
      m = 12 + m;
      if (d < 0 || (d === 0 && today.getDate() < birthDate.getDate())) {
        m--;
      }
    }

    return age
  }

  ageText(age: number) {
    let txt;
    let count = age % 100;
    if (count >= 5 && count <= 20) {
      txt = 'лет';
    } else {
      count = count % 10;
      if (count == 1) {
        txt = 'год';
      } else if (count >= 2 && count <= 4) {
        txt = 'года';
      } else {
        txt = 'лет';
      }
    }

    return txt;
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
