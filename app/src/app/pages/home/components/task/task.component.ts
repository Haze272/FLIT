import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITask} from "../../../../shared/models/task.interface";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task!: ITask;
  @Output() onAddedToFavorite: EventEmitter<ITask> = new EventEmitter<ITask>();
  addedToFavorite: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFavorite() {
    this.addedToFavorite ? this.addToFavorite() : 0;
    this.addedToFavorite = !this.addedToFavorite;
  }

  addToFavorite() {
    this.onAddedToFavorite.emit();
  }
}
