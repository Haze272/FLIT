import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../shared/services/task.service";
import {ITask} from "../../shared/models/task.interface";
import {ITaskType} from "../../shared/models/task-type.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [TaskService]
})
export class HomeComponent implements OnInit {
  tasks: ITask[] = [];
  taskTypes: ITaskType[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getMockTasks();
    this.taskTypes = this.taskService.getMockTaskTypes();
  }

}
