import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../shared/services/task.service";
import {ITask} from "../../shared/models/task.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
  providers: [TaskService]
})
export class TaskDetailComponent implements OnInit {
  task!: ITask;
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    let prodId: number = parseInt(this.route.snapshot.params['taskId']);
    this.task = this.taskService.getProductById(prodId);
  }

}
