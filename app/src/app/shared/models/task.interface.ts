import {ITaskType} from "./task-type.interface";

export interface ITask {
  title: string,
  description: string,
  price: number,
  tags: string[],
  taskType: ITaskType,
  date: string,
  responsesCount: number
}
